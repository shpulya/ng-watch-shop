import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModalDialogService {
    private isDialogWindow: boolean = false;

    constructor() {
    }

    public openDialogWindow(id: string): void {
        this.isDialogWindow = true;
    }

    public closeDialogWindow(id: string): void {
        this.isDialogWindow = false;
    }

    public isOpenDialogWindow(): boolean {
        return this.isDialogWindow;
    }
}
