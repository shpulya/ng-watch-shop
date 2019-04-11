import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Watch } from '../shared/watch';
import { Observable } from 'rxjs';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(SidenavComponent) sidenav;

  watches: Observable<Watch[]>;
  viewIconState = 'grid';
  page = 1;
  manufacturers = [];
  oses = [];
  screenTypes = [];

  constructor(private watchService: WatchService) {
    this.watches = this.watchService.getAllWatches();
  }

  onToggleViewIcon (state) {
    this.viewIconState = state;
  }

  ngAfterViewInit() {
    this.manufacturers = this.sidenav.manufacturers;
    this.oses = this.sidenav.oses;
    this.screenTypes = this.sidenav.screenTypes;
  }
}
