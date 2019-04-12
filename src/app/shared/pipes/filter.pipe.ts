import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {Watch} from '../watch';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(watches: Watch[], ...filterArrays): Watch[] {

    if (!watches) { return []; }

    if (filterArrays[0].length > 0) {
      watches = watches.filter(s => filterArrays[0].includes(s.manufacturer));
    }

    if (filterArrays[1].length > 0) {
      watches = watches.filter(s => filterArrays[1].includes(s.os));
    }

    if (filterArrays[2].length > 0) {
      watches = watches.filter(s => filterArrays[2].includes(s.screenType));
    }

    return watches;
  }
}
