import { Subject } from 'rxjs';

export default class ToastService {

    static _subject = undefined;

    static subscribe(callback) {
        if (!ToastService._subject) {
            ToastService._subject = new Subject();
        }
        return ToastService._subject.subscribe(callback);
    }

    static success(message, title) {
        ToastService._subject.next({
            type: 'success',
            title,
            message
        });
    }

    static error(message, title) {
        ToastService._subject.next({
            type: 'error',
            title,
            message
        });
    }    

}