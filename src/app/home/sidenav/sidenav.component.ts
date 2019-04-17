import {Component, OnInit, Input } from '@angular/core';
import { Observable} from 'rxjs';
import {IWatch} from '../../shared/IWatch';
import {WatchService} from '../../shared/services';
import {IPriceRange} from '../../shared/IPriceRange';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() private watches: IWatch[];

  private isOpenPriceFilter: boolean = false;
  private isOpenScreenTypeFilter: boolean = false;
  private isOpenManufacturerFilter: boolean = false;
  private isOpenOSFilter: boolean = false;
  private manufacturers: Array<string> = [];
  private oses: Array<string> = [];
  private screenTypes: Array<string> = [];
  private priceRange: IPriceRange = {from: 0, to: 999999};

  constructor(private watchService: WatchService) {
  }

  private changePriceRange(key: string, value: number): void {
    this.priceRange[key] = value;
    this.watchService.changeFiltersStates(this.manufacturers, this.oses, this.screenTypes, this.priceRange);
  }

  private onCheck (arr: Array<string>, value: string): void {
    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);

      const ele = document.getElementById(value) as HTMLInputElement;
      ele.checked = false;
    }

    this.watchService.changeFiltersStates(this.manufacturers, this.oses, this.screenTypes, this.priceRange);
  }

  public ngOnInit(): void {

  }
}
