import {Component, OnInit, Input } from '@angular/core';
import {IWatch} from '../../shared/IWatch';
import {WatchService} from '../../shared/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() public watches: IWatch[];

  public isOpenPriceFilter: boolean = false;

  public isOpenScreenTypeFilter: boolean = false;

  public isOpenManufacturerFilter: boolean = false;

  public isOpenOSFilter: boolean = false;

  public manufacturers: Array<string> = [];

  public oses: Array<string> = [];

  public screenTypes: Array<string> = [];

  public priceFrom: number;

  public priceTo: number;

  constructor(private watchService: WatchService) {
  }

  public ngOnInit(): void {
  }

  public changePriceRange(flag: string): void {
    if (flag === 'from' && this.priceTo && this.priceFrom > this.priceTo) {
      this.priceFrom = 0;
    }

    if (flag === 'to' && this.priceFrom && this.priceFrom > this.priceTo) {
      this.priceTo = 999999;
    }

    this.watchService.changeFiltersStates(this.manufacturers, this.oses, this.screenTypes, this.priceFrom, this.priceTo);
  }

  public onCheck (arr: Array<string>, value: string): void {
    const index = arr.indexOf(value);

    if (index === -1) {
      arr.push(value);
    } else {
      arr.splice(index, 1);

      const ele = document.getElementById(value) as HTMLInputElement;
      ele.checked = false;
    }

    this.watchService.changeFiltersStates(this.manufacturers, this.oses, this.screenTypes, this.priceFrom, this.priceTo);
  }
}
