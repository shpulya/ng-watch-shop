import { Component, OnInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Router } from '@angular/router';
import {IWatch} from '../shared/IWatch';
import {ModalDialogService} from '../shared/services/modal-dialoge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public viewIconState: string = 'grid';

  public page: number = 1;

  public manufacturers: Array<string> = [];

  public oses: Array<string> = [];

  public screenTypes: Array<string> = [];

  public priceFrom: number;

  public priceTo: number;

  public orderByMode: string = 'asc';

  constructor(private watchService: WatchService, private modalDialogSevice: ModalDialogService) {

    }

  public getWatches(): Array<IWatch> {
    return this.watchService.getWatches();
  }

  public onToggleViewIcon (state: string): void {
    this.viewIconState = state;
  }

    public filterWatches (): Array<IWatch> {
        let watches = this.getWatches();

        if (!watches) { return []; }

        if ( this.manufacturers && this.manufacturers.length > 0) {
          watches = watches.filter((w: IWatch) => this.manufacturers.includes(w.manufacturer));
        }

        if (this.oses && this.oses.length > 0) {
          watches = watches.filter((w: IWatch) => this.oses.includes(w.os));
        }

        if (this.screenTypes && this.screenTypes.length > 0) {
          watches = watches.filter((w: IWatch) => this.screenTypes.includes(w.screenType));
        }

        if (this.priceFrom || this.priceTo) {
          watches = watches.filter ((w: IWatch) => {
            const priceFrom = this.priceFrom || 0;
            const priceTo = this.priceTo || 999999;

            return w.price >= priceFrom && w.price <= priceTo;
          });
        }

        return watches;
    }

    public isOpenDialogWindow(): boolean {
      return this.modalDialogSevice.isOpenDialogWindow();
    }

    public ngOnInit(): void {
        this.watchService.loadWatches();
        this.watchService.manufacturers$.subscribe((manufacturers: Array<string>) => {
            this.manufacturers = manufacturers;
        });
        this.watchService.OSes$.subscribe((OSes: Array<string>) => {
            this.oses = OSes;
        });
        this.watchService.screenTypes$.subscribe((screenTypes: Array<string>) => {
            this.screenTypes = screenTypes;
        });
        this.watchService.priceFrom$.subscribe((priceFrom: number) => {
            this.priceFrom = priceFrom;
        });
        this.watchService.priceTo$.subscribe((priceTo: number) => {
            this.priceTo = priceTo;
        });
    }
}
