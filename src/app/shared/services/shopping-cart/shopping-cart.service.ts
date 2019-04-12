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
  watches = [];

  constructor() { }

  addWatchToCart(watch: Watch) {
    this.watchesSource.next(watch);
    this.currentWatches.pipe(first()).subscribe(item => this.watches.push(item));
    this.counterSource.next(this.watches.length);
    console.log(this.watches);
  }

  cartList () {
    return this.watches;
  }
}
