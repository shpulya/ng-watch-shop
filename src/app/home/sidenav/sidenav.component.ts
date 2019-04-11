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

  isOpenPriceFilter = false;
  isOpenScreenTypeFilter = false;
  isOpenManufacturerFilter = false;
  isOpenOSFilter = false;
  manufacturers = [];
  oses = [];
  screenTypes = [];
  isSetManufacturerFilters = false;
  isSetOSFilters = false;
  isSetScreenTypeFilters = false;

  constructor() {
  }

  onCheck (arr, value, isState) {
    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);
    }

    if (!!arr.toString()) {
      isState = true;
    } else {
      isState = false;
    }
  }


  ngOnInit() {

  }
}
