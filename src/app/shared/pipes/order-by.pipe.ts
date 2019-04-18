import { Pipe, PipeTransform } from '@angular/core';
import {IWatch} from '../IWatch';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(watches: Array<IWatch>, type: string): any {
    if (!watches) { return []; }

    watches =  watches.sort((a: IWatch, b: IWatch) => {
        if (type === 'asc') return a.price - b.price;
        if (type === 'desk') return b.price - a.price;
    });

    return watches;
  }


}
