import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../shared/services';
import { Watch } from '../shared/watch';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../shared/services/shopping-cart/shopping-cart.service';




@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.scss']
})
export class WatchDetailComponent implements OnInit {
  private routeSubscription: Subscription;
  watchId: number;
  watch: Watch;


  constructor(private route: ActivatedRoute, private watchService: WatchService, private shoppingCartService: ShoppingCartService) {

    this.routeSubscription = route.params.subscribe(params => this.watchId = params['watchId']);
    this.watchService.getWatchById(this.watchId).subscribe(watch => { this.watch = watch; });

  }

  addWatchToCart() {
    this.shoppingCartService.addWatchToCart(this.watch);
  }

  ngOnInit() {
  }

}
