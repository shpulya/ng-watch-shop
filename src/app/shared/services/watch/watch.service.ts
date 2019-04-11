import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Watch } from '../../watch';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private http: HttpClient) { }

  getAllWatches(): Observable<Watch[]> {
    return this.http.get<Watch[]>('/data/watches.json');
  }

  getWatchById(watchId): Observable<Watch> {
    return this.http.get<Watch[]>('/data/watches.json')
      .pipe(map(watches => watches.find(watch => watch.id === 2)));
  }
}
