import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../shared/services';
import { Watch } from '../shared/watch';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';




@Component({
  selector: 'app-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.scss']
})
export class WatchDetailComponent implements OnInit {
  private routeSubscription: Subscription;
  watchId: number;
  watch: Watch;


  constructor(private route: ActivatedRoute, private watchService: WatchService) {

    this.routeSubscription = route.params.subscribe(params => this.watchId = params['watchId']);
    this.watchService.getWatchById(this.watchId).subscribe(watch => { this.watch = watch; });


    // route.params
    //   .pipe(mergeMap(({watchId}) => watchService.getWatchById(watchId)))
    //   .subscribe(watch => this.watch = watch);
  }

  ngOnInit() {
  }

}
