import { Injectable } from '@angular/core';
import { Watch } from '../../watch';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private watches = [];

  constructor() { }

  addWatchToCart (watch: Watch) {
    this.watches.push(watch);
  }

  getWatchesFromCart(): Watch[] {
    return  this.watches;
  }
}
