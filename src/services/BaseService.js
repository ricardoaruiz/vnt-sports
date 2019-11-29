import axios from 'axios';

export default class BaseService {

    static _http = undefined;

    static get http() {
        if (!BaseService._http) {
            BaseService._http = axios.create({
                baseURL: 'https://jsonplaceholder.typicode.com'
            });
        }
        return BaseService._http;
    }

}