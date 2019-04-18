import {Component, OnInit} from '@angular/core';
import {IWatch} from '../shared/IWatch';
import {ShoppingCartService} from '../shared/services/shopping-cart/shopping-cart.service';
import {ModalDialogService} from '../shared/services/modal-dialoge.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    public watches: Array<IWatch> = [];

    constructor(
        private shoppingCartService: ShoppingCartService,
        private modalDialogService: ModalDialogService) {
    }

    public onIncreaseCount(watch: IWatch): void {
        this.watches.push(watch);
    }

    public onReduceCount(watch: IWatch): void {
        if (this.watches.includes(watch)) {
            this.watches.splice(this.watches.indexOf(watch), 1);
        }
    }

    public getSum(): number {
        return this.watches.reduce((acc: number, b: IWatch) => (acc + b.price), 0);
    }

    public getWatches(): Array<any> {
        this.watches = this.shoppingCartService.getWatchesFromCart();

        let groupWatches = Object.values(this.watches.reduce((acc: number, watch: IWatch) => {
            acc[watch.id] = acc[watch.id] || [watch.id, 0];
            acc[watch.id][1]++;
            return acc;
        }, {})).map((w: IWatch) => ({
            'count': w[1],
            'item': this.watches.filter((watch: IWatch) =>
                watch.id === w[0])[0]
        }));

        return groupWatches;
    }

    public closeDialogWindow(id: string): void {
        this.modalDialogService.closeDialogWindow(id);
    }

    public ngOnInit(): void {
        this.watches = this.shoppingCartService.getWatchesFromCart();
    }
}
