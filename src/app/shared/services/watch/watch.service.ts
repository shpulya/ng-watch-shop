import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Watch } from '../../watch';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchService {
  private manufacturersSource = new BehaviorSubject([]);
  currentManufacturers = this.manufacturersSource.asObservable();

  private OSesSource = new BehaviorSubject([]);
  currentOSes = this.OSesSource.asObservable();

  private screenTypesSource = new BehaviorSubject([]);
  currentScreenTypes = this.screenTypesSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllWatches(): Observable<Watch[]> {
    return this.http.get<Watch[]>('/data/watches.json');
  }

  getWatchById(watchId): Observable<Watch> {
    return this.http.get<Watch[]>('/data/watches.json')
      .pipe(map(watches => watches.find(watch => watch.id === parseInt(watchId, 10))));
  }

  changeFiltersStates(manufactures, OSes, screenTypes) {
    this.manufacturersSource.next(manufactures);
    this.OSesSource.next(OSes);
    this.screenTypesSource.next(screenTypes);
  }
}
