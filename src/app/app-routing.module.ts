import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'events', component: EventComponent },
    { path: 'addEvent', component: AddEventComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
