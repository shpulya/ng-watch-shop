import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IWatch} from '../../IWatch';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WatchService {
    public manufacturers$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);

    public OSes$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);

    public screenTypes$: BehaviorSubject<Array<string>> = new BehaviorSubject([]);

    public priceFrom$: BehaviorSubject<number> = new BehaviorSubject(null);

    public priceTo$: BehaviorSubject<number> = new BehaviorSubject(null);

    private watches: Array<IWatch> = [];

    constructor(private http: HttpClient) {
    }

    public loadWatches(): void {
        this.http.get('/data/watches.json').subscribe((watches: Array<IWatch>) => {
            this.watches = watches;
        });
    }

    public getWatchById(watchId: string): IWatch {
        return this.watches.find((watch: IWatch) =>
            watch.id === parseInt(watchId, 10));
    }

    public getWatches(): Array<IWatch> {
        return this.watches;
    }

    public changeFiltersStates(
        manufactures: Array<string>,
        OSes: Array<string>,
        screenTypes: Array<string>,
        priceFrom: number,
        priceTo: number): void {

        this.manufacturers$.next(manufactures);
        this.OSes$.next(OSes);
        this.screenTypes$.next(screenTypes);
        this.priceFrom$.next(priceFrom);
        this.priceTo$.next(priceTo);

    }
}
