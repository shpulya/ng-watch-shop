import { Injectable } from '@angular/core';
import { IWatch } from '../../IWatch';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private watches: Array<IWatch> = [];

  constructor() { }

  public addWatchToCart (watch: IWatch): void {
    this.watches.push(watch);
  }

  public getWatchesFromCart(): Array<IWatch> {
    return  this.watches;
  }
}
