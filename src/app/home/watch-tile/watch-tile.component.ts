import {Component, OnInit, Input} from '@angular/core';
import {IWatch} from '../../shared/IWatch';
import {ShoppingCartService} from '../../shared/services/shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-watch-tile',
    templateUrl: './watch-tile.component.html',
    styleUrls: ['./watch-tile.component.scss']
})
export class WatchTileComponent implements OnInit {
    @Input() private watch: IWatch;

    constructor(private shoppingCartService: ShoppingCartService) {
    }

    public ngOnInit(): void {
    }

    public addWatchToCart(): void {
        this.shoppingCartService.addWatchToCart(this.watch);
    }
}
