import { Component,  Input, OnInit } from '@angular/core';
import {Watch} from '../shared/watch';
import {ShoppingCartService} from '../shared/services/shopping-cart/shopping-cart.service';

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
    this.shoppingCartService.increaseCount(watch);
    this.watches = this.shoppingCartService.cartList();
  }

  onReduceCount(watch) {
    this.shoppingCartService.reduceCount(watch);
    this.watches = this.shoppingCartService.cartList();
  }

  ngOnInit() {
    this.watches = this.shoppingCartService.cartList();
  }
}
