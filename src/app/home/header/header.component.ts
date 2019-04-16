import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter: number;

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  getCounter() {
    this.counter = this.shoppingCartService.getWatchesFromCart().length;
    return this.counter;
  }

  ngOnInit() {

  }

}
