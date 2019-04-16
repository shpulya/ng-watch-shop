import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {IWatch} from '../IWatch';

@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(watches: IWatch[], ...filterArrays): IWatch[] {

    if (!watches) { return []; }

    const manufecturers = filterArrays[0];
    const OSes = filterArrays[1];
    const screenTypes = filterArrays[2];


    if ( manufecturers && manufecturers.length > 0) {
      watches = watches.filter(s => filterArrays[0].includes(s.manufacturer));
    }

    if (OSes && OSes.length > 0) {
      watches = watches.filter(s => filterArrays[1].includes(s.os));
    }

    if (screenTypes && screenTypes.length > 0) {
      watches = watches.filter(s => filterArrays[2].includes(s.screenType));
    }
    console.log(watches);
    return watches;
  }
}
