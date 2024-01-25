import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Route} from "@angular/router";
import {PersonsService} from "../../../services/persons.service";
import {Person} from "../../../models/person.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-person',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit {
  newPhoneNumber: string = '';
  personDetails: Person = {
    id: 0,
    surname: '',
    name: '',
    yearOfBirth: 0,
    phoneNumbers: []
  };
  constructor(private route: ActivatedRoute, private personService: PersonsService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.personService.getPerson(id).subscribe({
            next: (response) => {
              this.personDetails = response;
            }
          });
        }
      }
    });
  }
  addPhoneNumber() {
    this.personDetails.phoneNumbers.push(this.newPhoneNumber);
    this.newPhoneNumber = '';
  }

  isValidPhoneNumber() {
    const pattern = /^\d{11}$/;
    return pattern.test(this.newPhoneNumber);
  }

  removePhoneNumber(index: number) {
    if (index >= 0 && index < this.personDetails.phoneNumbers.length) {
      this.personDetails.phoneNumbers.splice(index, 1);
    }
  }

  updatePerson() {
    this.personService.updatePerson(String(this.personDetails.id), this.personDetails).subscribe({
    next: (response) => {
      this.router.navigate(['persons'])
    }
    });
  }

  deletePerson(id: string) {
    this.personService.deletePerson(String(id)).subscribe({
      next: (response) => {
        this.router.navigate(['persons'])
      }
    });
  }

  protected readonly String = String;
}
