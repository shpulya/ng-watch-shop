import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {
    public transform(collection: Array<any>, property: string): Array<any> {
        if (!collection) {
            return null;
        }

        const groupedCollection = collection.reduce((previous: any, current: any) => {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            } else {
                previous[current[property]].push(current);
            }

            return previous;
        }, {});

        return Object.keys(groupedCollection).map((key: any) => ({key, value: groupedCollection[key]}));
    }
}
