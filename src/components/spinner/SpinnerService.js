import { Subject } from 'rxjs'

export default class SpinnerService {

    static _spinnerSubject = undefined;

    static subscribe(callback) {
        if (!SpinnerService._spinnerSubject) {
            SpinnerService._spinnerSubject = new Subject();
        }
        return SpinnerService._spinnerSubject.subscribe(callback);
    }

    static on() {
        SpinnerService._spinnerSubject.next(true);
    }

    static off() {
        SpinnerService._spinnerSubject.next(false);
    }
}