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

  ngOnInit() {
    this.watches = this.shoppingCartService.cartList();
  }
}
