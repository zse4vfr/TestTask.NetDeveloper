import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/person.model';
import { CommonModule } from '@angular/common';
import { PersonsService } from '../../../services/persons.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-persons-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css'
})
export class PersonsListComponent implements OnInit{

  persons: Person[] = [];
  constructor(private personsService: PersonsService) {

  }

  ngOnInit(): void {
    this.personsService.getAllPersons()
      .subscribe({
        next: (persons) => {
          this.persons = persons;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
