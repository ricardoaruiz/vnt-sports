import BaseService from './BaseService';

const BASE_URL = '/posts'

export default class PostService {

    static listAll() {
        return BaseService.http.get(`${BASE_URL}`)
            .catch(error => console.error(error));
    }

    static listByUserId(userId) {
        return BaseService.http.get(`${BASE_URL}?userId=${userId}`)
        .catch(error => console.error(error));
    }

}