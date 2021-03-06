import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {WatchDetailComponent} from './watch-detail/watch-detail.component';
import {HeaderComponent} from './home/header/header.component';
import {SidenavComponent} from './home/sidenav/sidenav.component';
import {WatchTileComponent} from './home/watch-tile/watch-tile.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import {WatchService} from './shared/services/';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {GroupByPipe} from './shared/pipes/group-by.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {WatchLineComponent} from './home/watch-line/watch-line.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {ScModalModule} from 'angular-5-popup';
import {ShoppingCartService} from './shared/services/shopping-cart/shopping-cart.service';
import {OrderByPipe} from './shared/pipes/order-by.pipe';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CartComponent,
        WatchDetailComponent,
        HeaderComponent,
        SidenavComponent,
        WatchTileComponent,
        GroupByPipe,
        WatchLineComponent,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        HttpModule,
        AppRoutingModule,
        ScModalModule
    ],
    providers: [
        WatchService,
        ShoppingCartService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
