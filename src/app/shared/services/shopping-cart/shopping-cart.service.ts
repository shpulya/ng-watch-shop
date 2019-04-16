import { Injectable } from '@angular/core';
import { IWatch } from '../../IWatch';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private watches = [];

  constructor() { }

  addWatchToCart (watch: IWatch) {
    this.watches.push(watch);
  }

  getWatchesFromCart(): IWatch[] {
    return  this.watches;
  }
}
