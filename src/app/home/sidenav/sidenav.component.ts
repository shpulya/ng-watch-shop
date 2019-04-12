import {Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {Watch} from '../../shared/watch';
import {WatchService} from '../../shared/services';

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

  constructor(private watchService: WatchService) {
  }

  onCheck (arr, value) {
    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);

      const ele = document.getElementById(value) as HTMLInputElement;
      ele.checked = false;
    }

    this.watchService.changeFiltersStates(this.manufacturers, this.oses, this.screenTypes);
  }


  ngOnInit() {

  }
}
