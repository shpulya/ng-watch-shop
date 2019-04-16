import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatch } from '../../IWatch';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WatchService {
  manufacturers$ = new BehaviorSubject([]);
  OSes$ = new BehaviorSubject([]);
  screenTypes$ = new BehaviorSubject([]);
  priceRange$ = new BehaviorSubject([]);

  private watches = [];

  constructor(private http: HttpClient) { }

  loadWatches(): void {
    this.http.get<IWatch[]>('/data/watches.json').subscribe(watches => {
      this.watches = watches;
    });
  }

  getWatchById(watchId): Observable<IWatch> {
    return this.watches.find(watch => watch.id === parseInt(watchId, 10));
  }

  getWatches() {
    return this.watches;
  }

  changeFiltersStates(manufactures, OSes, screenTypes, priceRange) {
    this.manufacturers$.next(manufactures);
    this.OSes$.next(OSes);
    this.screenTypes$.next(screenTypes);
    this.priceRange$.next(priceRange);
  }
}
