import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  baseApiUrl: string = enviroment.baseApiUrl;
  constructor(private http: HttpClient) {
  }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseApiUrl + '/api/persons');
  }

  addPerson(addPersonRequest: Person) : Observable<Person> {
    return this.http.post<Person>(this.baseApiUrl + '/api/persons', addPersonRequest);
  }
  getPerson(id: string) : Observable<Person> {
    return this.http.get<Person>(this.baseApiUrl + '/api/persons/' + id);
  }

  updatePerson(id: string, updatePersonRequest: Person) : Observable<Person> {
    return this.http.put<Person>(this.baseApiUrl + '/api/persons/' + id, updatePersonRequest);
  }
  deletePerson(id: string) : Observable<Person> {
    return this.http.delete<Person>(this.baseApiUrl + '/api/persons/' + id);
  }
}
