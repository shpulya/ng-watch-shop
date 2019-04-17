import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWatch } from '../../IWatch';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {IPriceRange} from '../../IPriceRange';


@Injectable({
  providedIn: 'root'
})
export class WatchService {
  public manufacturers$ = new BehaviorSubject([]);
  public OSes$ = new BehaviorSubject([]);
  public screenTypes$ = new BehaviorSubject([]);
  public priceRange$ = new BehaviorSubject({from: 0, to: 999999});

  private watches: Array<IWatch> = [];

  constructor(private http: HttpClient) { }

  public loadWatches(): void {
    this.http.get<IWatch[]>('/data/watches.json').subscribe(watches => {
      this.watches = watches;
    });
  }

  public getWatchById(watchId: string): IWatch {
    return this.watches.find(watch =>
      watch.id === parseInt(watchId, 10));
  }

  public getWatches(): Array<IWatch> {
    return this.watches;
  }

  public changeFiltersStates(manufactures: Array<string>, OSes: Array<string>, screenTypes: Array<string>, priceRange: IPriceRange): void {
    this.manufacturers$.next(manufactures);
    this.OSes$.next(OSes);
    this.screenTypes$.next(screenTypes);
    this.priceRange$.next(priceRange);
  }
}
