import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventModel } from './../model/event.model';
import { EventService } from './../event/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [EventService]
})
export class AddEventComponent implements OnInit {

  private event: EventModel;

  constructor(private eventService: EventService, private router: Router) {
    this.event = new EventModel();
  }

  ngOnInit() {
  }

  public addEvent(): void {
    this.eventService.addEvent(this.event);
    this.router.navigate(['/events']);
  }

}
