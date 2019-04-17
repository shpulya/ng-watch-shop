import { Component, OnInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Router } from '@angular/router';
import {IPriceRange} from '../shared/IPriceRange';
import {IWatch} from '../shared/IWatch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private viewIconState: string = 'grid';
  private page: number = 1;
  private manufacturers: Array<string> = [];
  private oses: Array<string> = [];
  private screenTypes: Array<string> = [];
  private priceRange: IPriceRange;

  constructor(private watchService: WatchService) {

    }

  private onToggleViewIcon (state: string): void {
    this.viewIconState = state;
  }

  private filterWatches (): Array<IWatch> {
    let watches = this.getWatches();

    if (!watches) { return []; }

    if ( this.manufacturers && this.manufacturers.length > 0) {
      watches = watches.filter(w => this.manufacturers.includes(w.manufacturer));
    }

    if (this.oses && this.oses.length > 0) {
      watches = watches.filter(w => this.oses.includes(w.os));
    }

    if (this.screenTypes && this.screenTypes.length > 0) {
      watches = watches.filter(w => this.screenTypes.includes(w.screenType));
    }

    if (this.priceRange) {
      watches = watches.filter (w =>
        w.price >= (this.priceRange.from ? this.priceRange.from : 0) && w.price <= (this.priceRange.to ? this.priceRange.to : 999999)
      );
    }

    return watches;
  }

  public ngOnInit(): void {
    this.watchService.loadWatches();
    this.watchService.manufacturers$.subscribe(manufacturers => {
      this.manufacturers = manufacturers;
    });
    this.watchService.OSes$.subscribe(OSes => {
      this.oses = OSes;
    });
    this.watchService.screenTypes$.subscribe(screenTypes => {
      this.screenTypes = screenTypes;
    });
    this.watchService.priceRange$.subscribe(priceRange => {
      this.priceRange = priceRange;
    });
  }

  private getWatches(): Array<IWatch> {
    return this.watchService.getWatches();
  }
}
