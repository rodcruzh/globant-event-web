import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventModel } from './../model/event.model';
import { VenueModel } from './../model/venue.model';
import { EventService } from './../event/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  providers: [EventService]
})
export class AddEventComponent implements OnInit {

  private event: EventModel;
  private venue: VenueModel;

  constructor(private eventService: EventService, private router: Router) {
    this.event = new EventModel();
    this.venue = new VenueModel();
  }

  ngOnInit() {
  }

  public addEvent(): void {
    this.eventService.addVenue(this.venue).subscribe(res => {
      this.venue = res;
    });

    this.event.idVenue = this.venue.id;

    this.eventService.addEvent(this.event).subscribe(res => {
      this.event = res;
    });

    this.router.navigate(['/events']);
  }

}
