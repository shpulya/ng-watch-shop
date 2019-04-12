import { Component, OnInit, Input } from '@angular/core';
import {Watch} from '../../shared/watch';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-watch-line',
  templateUrl: './watch-line.component.html',
  styleUrls: ['./watch-line.component.scss']
})
export class WatchLineComponent implements OnInit {
  @Input() watch: Watch;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addWatchToCart() {
    this.shoppingCartService.addWatchToCart(this.watch);
  }
  ngOnInit() {
  }

}
