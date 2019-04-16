import { Component, OnInit, ViewChild } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { IWatch } from '../shared/IWatch';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('header') header;
  private watches: Array<IWatch> = [];
  viewIconState = 'grid';
  page = 1;
  manufacturers = [];
  oses = [];
  screenTypes = [];
  priceRange = [];

  constructor(private watchService: WatchService) {

    }

  onToggleViewIcon (state) {
    this.viewIconState = state;
    console.log('priceRange' + this.priceRange);
  }

  filterWatches () {
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

    return watches;
  }

  ngOnInit() {
    this.watchService.loadWatches();
    this.watchService.manufacturers$.subscribe(manufacturers => {
      this.manufacturers = manufacturers;
    });
    this.watchService.OSes$.subscribe(OSes => this.oses = OSes);
    this.watchService.screenTypes$.subscribe(screenTypes => this.screenTypes = screenTypes);
    this.watchService.priceRange$.subscribe(priceRange => this.priceRange = priceRange);
  }

  getWatches() {
    return this.watchService.getWatches();
  }
}
