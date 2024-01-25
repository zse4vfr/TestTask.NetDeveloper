import { Component, OnInit} from '@angular/core';
import { Person } from '../../../models/person.model';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {NgForOf, NgIf} from "@angular/common";
import {PersonsService} from "../../../services/persons.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    NgIf,
    NgForOf
  ],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit {

  newPhoneNumber: string = '';

  addPersonRequest: Person = {
    id: 0,
    surname: '',
    name: '',
    yearOfBirth: 1900,
    phoneNumbers: []
  }
  constructor(private personService: PersonsService, private router: Router) {

  }

  ngOnInit() {

  }

  addPerson() {
    this.personService.addPerson(this.addPersonRequest).
    subscribe({
      next: (person) => {
        this.router.navigate(['persons']);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  addPhoneNumber() {
    this.addPersonRequest.phoneNumbers.push(this.newPhoneNumber);
    this.newPhoneNumber = '';
  }

  isValidPhoneNumber() {
    const pattern = /^\d{11}$/;
    ///^(\+\d{1,3}[- ]?)?\d{1,4}[- ]?\d{1,4}$/;
    return pattern.test(this.newPhoneNumber);
  }

  removePhoneNumber(index: number) {
   if (index >= 0 && index < this.addPersonRequest.phoneNumbers.length) {
      this.addPersonRequest.phoneNumbers.splice(index, 1);
    }
  }
}
