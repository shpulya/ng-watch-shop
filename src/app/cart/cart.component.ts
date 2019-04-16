import { Component, OnInit } from '@angular/core';
import { IWatch } from '../shared/IWatch';
import { ShoppingCartService } from '../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  watches = [];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  onIncreaseCount(watch) {
    this.watches.push(watch);
  }

  onReduceCount(watch) {
    if (this.watches.includes(watch)) {
      this.watches.splice(this.watches.indexOf(watch), 1);
    }
  }

  getSum() {
    return this.watches.reduce((acc, b) => (acc + b.price), 0);
  }

  getWatches() {
    this.watches = this.shoppingCartService.getWatchesFromCart();

    let groupWatches = Object.values(this.watches.reduce((acc, watch) => {
      acc[watch.id] = acc[watch.id] || [watch.id, 0];
      acc[watch.id][1]++;
      return acc;
    }, {})).map(w => ({
        'count': w[1],
        'item' : this.watches.filter (watch =>
          watch.id === w[0])[0]
      }));

    return groupWatches;
  }

  ngOnInit() {
    this.watches = this.shoppingCartService.getWatchesFromCart();
  }
}
