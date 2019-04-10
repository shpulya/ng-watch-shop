import { Route } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { WatchDetailComponent } from './watch-detail/watch-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: HomeComponent },
    ]
  },
  { path: 'watch/:watchId', component: WatchDetailComponent },
  { path: 'cart', component: CartComponent }
];
