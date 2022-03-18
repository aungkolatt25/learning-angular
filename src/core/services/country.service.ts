import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../share/models/country.model';

/**
 * @Injectable Decorator
 * Decorator that marks a class as available to be provided and injected as a dependency.
 *  Option: providedIn? Determines which injectors will provide the injectable.
 */
@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {}
  /**
   * Observer pattern
   * Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
   * https://refactoring.guru/design-patterns/observer
   */
  getAll(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
