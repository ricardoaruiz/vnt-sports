import axios from 'axios';

export default class BaseService {

    static _jsonplaceholder = undefined;

    static _localApi = undefined;

    static get jsonplaceholder() {
        if (!BaseService._jsonplaceholder) {
            BaseService._jsonplaceholder = axios.create({
                baseURL: 'https://jsonplaceholder.typicode.com'
            });
        }
        return BaseService._jsonplaceholder;
    }

    static get localApi() {
        if (!BaseService._localApi) {
            BaseService._localApi = axios.create({
                baseURL: 'http://localhost:3001'
            });
        }
        return BaseService._localApi;
    }    

}