import { Component, OnInit, Input } from '@angular/core';
import {Watch} from '../../shared/watch';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-watch-tile',
  templateUrl: './watch-tile.component.html',
  styleUrls: ['./watch-tile.component.scss']
})
export class WatchTileComponent implements OnInit {
  @Input() watch: Watch;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addWatchToCart() {
    this.shoppingCartService.addWatchToCart(this.watch);
  }

  ngOnInit() {
  }

}
