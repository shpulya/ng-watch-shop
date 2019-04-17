import { Component, OnInit, Input } from '@angular/core';
import {IWatch} from '../../shared/IWatch';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-watch-line',
  templateUrl: './watch-line.component.html',
  styleUrls: ['./watch-line.component.scss']
})
export class WatchLineComponent implements OnInit {
  @Input() private watch: IWatch;

  constructor(private shoppingCartService: ShoppingCartService) { }

  private addWatchToCart(): void {
    this.shoppingCartService.addWatchToCart(this.watch);
  }
  public ngOnInit(): void {
  }

}
