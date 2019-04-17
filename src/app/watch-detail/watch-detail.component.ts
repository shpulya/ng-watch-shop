import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../shared/services';
import { IWatch } from '../shared/IWatch';
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
  private watchId: string;
  private watch: IWatch;


  constructor(private route: ActivatedRoute, private watchService: WatchService, private shoppingCartService: ShoppingCartService) {

    this.routeSubscription = route.params.subscribe((params: any) => this.watchId = params['watchId']);
  }

  public ngOnInit(): void {
    this.watch = this.watchService.getWatchById(this.watchId);
  }
  
  public addWatchToCart(): void {
    this.shoppingCartService.addWatchToCart(this.watch);
  }

}
