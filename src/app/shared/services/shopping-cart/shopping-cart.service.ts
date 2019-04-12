import { Injectable } from '@angular/core';
import {Watch} from '../../watch';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  watchesSource = new BehaviorSubject(null);
  currentWatches = this.watchesSource.asObservable();
  counterSource = new BehaviorSubject(0);
  currentCounter = this.counterSource.asObservable();
  watches = [];

  constructor() { }

  addWatchToCart(watch: Watch) {
    this.watchesSource.next(watch);
    this.currentWatches.subscribe(item => this.watches.push(item));
    this.counterSource.next(this.watches.length);
  }

  cartList () {
    return this.watches;
  }
}
