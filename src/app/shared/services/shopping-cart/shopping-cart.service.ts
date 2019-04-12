import { Injectable } from '@angular/core';
import { Watch } from '../../watch';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  watchesSource = new BehaviorSubject(null);
  currentWatches = this.watchesSource.asObservable();
  counterSource = new BehaviorSubject(0);
  currentCounter = this.counterSource.asObservable();
  watchesListSource =  new BehaviorSubject([]);
  currentWatchesList = this.watchesListSource.asObservable();
  watches = [];

  constructor() { }

  addWatchToCart(watch: Watch) {
    this.watchesSource.next(watch);
    this.currentWatches.pipe(first()).subscribe(item => this.watches.push(item));
    this.updateCounter();
    console.log(this.watches);
  }

  increaseCount(watch) {
   this.watches.push(watch);
   this.updateCounter () ;
   this.updateWatches(this.watches);
  }

  reduceCount(watch) {
    this.watches.splice(this.watches.indexOf(watch), 1);
    this.updateWatches(this.watches);
    this.updateCounter ();
  }

  updateCounter () {
    this.counterSource.next(this.watches.length);
  }

  updateWatches (watches) {
    this.watchesListSource.next(watches);
  }

  cartList () {
    let watchesList = [];
    this.updateWatches(this.watches);
    this.currentWatchesList.subscribe(list => watchesList = list);
    return watchesList;
  }
}
