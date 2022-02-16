import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry, shareReplay } from 'rxjs/operators';

import { Animal, AnimalResponse, ErrorMessage } from '../models/Animal.model';

import {ANIMAL_MOCK} from '../animal.mock';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalsUrl = 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals'; // REST API

  private animals$: Observable<Animal[]> | undefined;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  /** GET the mocked data */
  getAnimalsMock(): Observable<Animal[]> {
    const subject = new Subject<Animal[]>();
    setTimeout(() => {
      subject.next(ANIMAL_MOCK.items);
      subject.complete();
    }, 100);
    return subject;
  }

  /**
   * Fetch all the animals from the API endpoint
   * @returns an array of Animal
   */
  getAnimals(): Observable<Animal[]> {
    if (!this.animals$) {
      this.animals$ = this.httpClient
          .get<AnimalResponse>(this.animalsUrl)
          .pipe(
            retry(1),
            catchError(this.processError)
          ).pipe(map(body => body.items))
          .pipe(shareReplay(1));
    }
    return this.animals$;
  }

  private processError(err: ErrorMessage) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
}
