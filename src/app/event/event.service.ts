import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventModel } from './../model/event.model';
import { VenueModel } from './../model/venue.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<EventModel[]> {
    return this.httpClient.get<EventModel[]>("http://localhost:8080/events");
  }

  public addEvent(event: EventModel): Observable<EventModel> {
    return this.httpClient.post<EventModel>("http://localhost:8080/events", event);
  }

  public addVenue(venue: VenueModel): Observable<VenueModel> {
    return this.httpClient.post<VenueModel>("http://localhost:8080/venue", venue);
  }

}
