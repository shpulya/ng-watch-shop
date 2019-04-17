import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';
import {ModalDialogService} from '../../shared/services/modal-dialoge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private counter: number;

  public isOpenDialogWindow: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService, private modalDialogService: ModalDialogService) {
  }

  public ngOnInit(): void {
  }

  public getCounter(): number {
    this.counter = this.shoppingCartService.getWatchesFromCart().length;
    return this.counter;
  }

  public openDialogWindow(id: string): void {
      this.modalDialogService.openDialogWindow(id);
  }
}
