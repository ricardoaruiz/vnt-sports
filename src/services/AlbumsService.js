import BaseService from './BaseService';

const BASE_URL = '/albums'

export default class AlbumsService {

    static listAll() {
        return BaseService.jsonplaceholder.get(BASE_URL)
            .catch(error => console.error(error));
    }

    static listByUserId(userId) {
        return BaseService.jsonplaceholder.get(`${BASE_URL}?userId=${userId}`)
        .catch(error => console.error(error));
    }

}