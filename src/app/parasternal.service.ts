import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { ENTRIES } from './mock-entries';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParasternalService {
  
  getEntries(): Observable<Entry[]> {
    return of(ENTRIES);
  }

  getEntry(name: string): Observable<Entry> {
    return of(ENTRIES.find(entry => entry.name === name))
  }
  constructor() { }
}
