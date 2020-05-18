import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PersonsService {
  //personsUrl = 'http://192.168.43.1:8080/api/person';  // URL to web api 
  personsUrl = 'api/person';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PersonsService');
  }

  /** GET persons from the server */
  getPersons (): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  
}
