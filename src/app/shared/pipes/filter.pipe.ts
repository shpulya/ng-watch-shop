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
      watches = filterArrays[0].map(el =>
        watches.filter(watch =>
          watch['manufacturer'].includes(el))
      );
    } else { return watches; }


    if (filterArrays[1].length > 0) {
      watches = filterArrays[1].map(el =>
        watches.filter(watch =>
          watch['os'].includes(el))
      );
    } else { return watches; }

    if (filterArrays[2].length > 0) {
      watches = filterArrays[2].map(el =>
        watches.filter(watch =>
          watch['screenType'].includes(el))
      );
    } else { return watches; }

    return watches;
  }
}
