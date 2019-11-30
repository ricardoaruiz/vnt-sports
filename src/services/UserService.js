import BaseService from './BaseService';

const BASE_URL = '/users'

export default class UserService {

    static listAll() {
        return BaseService.jsonplaceholder.get(BASE_URL)
            .catch(error => console.error(error));
    }

    static save(user) {
        return BaseService.jsonplaceholder.post(BASE_URL, user)
            .catch(error => console.error(error));
    }

}