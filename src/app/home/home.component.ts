import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Watch } from '../shared/watch';
import { Observable } from 'rxjs';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router } from '@angular/router';
import { ModalComponent } from 'angular-5-popup';
import {Popup} from 'ng2-opd-popup';
import {CartService} from '../cart/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(SidenavComponent) sidenav;
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('header') header;
  private modals: any[] = [];


  watches: Observable<Watch[]>;
  viewIconState = 'grid';
  page = 1;
  manufacturers = [];
  oses = [];
  screenTypes = [];
  submitted;

  constructor(
    private watchService: WatchService,
    private modalService: CartService) {
    this.watches = this.watchService.getAllWatches();
  }

  onToggleViewIcon (state) {
    this.viewIconState = state;
  }

  openModal() {
    this.modalService.open('modal-1');

    this.submitted = event;
  }

  closeModal(id) {
    this.modal.closeModal(id);
  }

  ngAfterViewInit() {
    this.manufacturers = this.sidenav.manufacturers;
    this.oses = this.sidenav.oses;
    this.screenTypes = this.sidenav.screenTypes;
    this.modals.push(this);
  }
}
