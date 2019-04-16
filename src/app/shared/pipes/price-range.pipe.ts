import { Pipe, PipeTransform } from '@angular/core';
import {IWatch} from '../IWatch';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(watches: IWatch[], range): IWatch[] {
    if (!watches) { return []; }

    if ( !!range.from ) {
      watches = watches.filter (w => w.price >= range.from );
    }

    if ( !!range.to ) {
      watches = watches.filter (w => w.price <= range.to );
    }

    return watches;
  }

}
