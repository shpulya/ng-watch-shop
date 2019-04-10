import {Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {Watch} from '../../shared/watch';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() watches: Observable<Watch[]>

  isOpenPriceFilter: boolean;
  isOpenScreenTypeFilter: boolean;
  isOpenManufacturerFilter: boolean;
  isOpenOSFilter: boolean;

  screenTypes = [];

  constructor() {
  }

  onCheckFilter (filters, item, isChecked) {
    if (isChecked) {
      this.screenTypes.push(item);
    } else {

    }
    isChecked = !isChecked;
  }

  ngOnInit() {
    this.isOpenPriceFilter = false;
    this.isOpenScreenTypeFilter = false;
    this.isOpenManufacturerFilter = false;
    this.isOpenOSFilter = false;
  }
}
