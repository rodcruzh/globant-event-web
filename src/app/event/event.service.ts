import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventModel } from './../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<EventModel[]> {
    return this.httpClient.get<EventModel[]>("http://localhost:8080/events");
  }

  public addEvent(event: EventModel): void {
    this.httpClient.post("http://localhost:8080/events", JSON.stringify(event));
  }

}
