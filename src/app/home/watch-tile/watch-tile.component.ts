import { Component, OnInit, Input } from '@angular/core';
import {Watch} from '../../shared/watch';

@Component({
  selector: 'app-watch-tile',
  templateUrl: './watch-tile.component.html',
  styleUrls: ['./watch-tile.component.scss']
})
export class WatchTileComponent implements OnInit {
  @Input() watch: Watch;

  constructor() { }

  ngOnInit() {
  }

}
