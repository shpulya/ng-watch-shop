import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WatchService } from '../shared/services/watch/watch.service';
import { Watch } from '../shared/watch';
import { Observable } from 'rxjs';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Router } from '@angular/router';
import { ModalComponent } from 'angular-5-popup';
import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(SidenavComponent) sidenav;
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('header') header;


  watches: Observable<Watch[]>;
  viewIconState = 'grid';
  page = 1;
  manufacturers = [];
  oses = [];
  screenTypes = [];
  submitted;

  constructor(
    private watchService: WatchService,
    private popup: Popup) {
    this.watches = this.watchService.getAllWatches();
  }

  onToggleViewIcon (state) {
    this.viewIconState = state;
  }

  openModal() {
    //this.modal.openModal('modal-1');
    //document.getElementById('modal-1').openModal();
    this.popup.show();
    this.submitted = event;
  }

  closeModal(id) {
    this.modal.closeModal(id);
  }

  ngAfterViewInit() {
    this.manufacturers = this.sidenav.manufacturers;
    this.oses = this.sidenav.oses;
    this.screenTypes = this.sidenav.screenTypes;
  }
}
