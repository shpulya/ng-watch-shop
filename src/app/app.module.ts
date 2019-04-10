import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WatchDetailComponent } from './watch-detail/watch-detail.component';
import { HeaderComponent } from './home/header/header.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { WatchTileComponent } from './home/watch-tile/watch-tile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {  } from './shared/services/';
import { WatchService } from './shared/services/';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { GroupByPipe } from './shared/group-by.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { WatchLineComponent } from './home/watch-line/watch-line.component';


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
    WatchLineComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    HttpModule
  ],
  providers: [
    WatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
