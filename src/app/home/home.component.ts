import { Component, OnInit, ViewChild } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Watch } from '../shared/watch';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('header') header;
  watches: Observable<Watch[]>;
  viewIconState = 'grid';
  page = 1;
  manufacturers = [];
  oses = [];
  screenTypes = [];

  constructor(
    private watchService: WatchService) {

  }

  onToggleViewIcon (state) {
    this.viewIconState = state;
  }

  ngOnInit() {
    this.watches = this.watchService.getAllWatches();
    this.watchService.currentManufacturers.subscribe(manufacturers => this.manufacturers = manufacturers);
    this.watchService.currentOSes.subscribe(OSes => this.oses = OSes);
    this.watchService.currentScreenTypes.subscribe(screenTypes => this.screenTypes = screenTypes);
  }
}
