import { Component, OnInit, Input } from '@angular/core';
import {Watch} from '../../shared/watch';

@Component({
  selector: 'app-watch-line',
  templateUrl: './watch-line.component.html',
  styleUrls: ['./watch-line.component.scss']
})
export class WatchLineComponent implements OnInit {
  @Input() watch: Watch;

  constructor() { }

  ngOnInit() {
  }

}