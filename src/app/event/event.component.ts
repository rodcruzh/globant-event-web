import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventService]
})
export class EventComponent implements OnInit {

  private events: Array<EventModel>;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  private getEvents(): void {
    this.eventService.getEvents().subscribe(res => {
      this.categories = res;
    });
  }

}
