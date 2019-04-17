import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private counter: number;

  constructor(private shoppingCartService: ShoppingCartService) {

  }

  private getCounter(): number {
    this.counter = this.shoppingCartService.getWatchesFromCart().length;
    return this.counter;
  }

  public ngOnInit(): void {

  }

}
