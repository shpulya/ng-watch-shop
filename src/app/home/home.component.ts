import { Component, OnInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Watch } from '../shared/watch';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watches: Observable<Watch[]>;
  viewIconState: string
  page = 1;

  constructor(private watchService: WatchService) {
    this.watches = this.watchService.getAllWatches();
  }

  onToggleViewIcon (state) {
    this.viewIconState = state;
  }

  ngOnInit() {
    this.viewIconState = 'grid';
  }
}
