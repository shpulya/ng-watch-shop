import { Component, OnInit } from '@angular/core';
import { Watch } from '../shared/watch';
import { ShoppingCartService } from '../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  watches: Watch[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  onIncreaseCount(watch) {
    this.shoppingCartService.increaseCount(watch);
    this.watches = this.shoppingCartService.cartList();
  }

  onReduceCount(watch) {
    this.shoppingCartService.reduceCount(watch);
    this.watches = this.shoppingCartService.cartList();
  }

  getSum() {
    return this.watches.reduce((acc, b) => (acc + b.price), 0);
  }

  ngOnInit() {
    this.watches = this.shoppingCartService.cartList();
  }
}
