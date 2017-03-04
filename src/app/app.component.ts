import { Component } from '@angular/core';
import {PeopleService, Person} from "./people/people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[];

  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getPeople();
  }
}
