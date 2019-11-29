import BaseService from './BaseService';

export default class AlbumsService {

    static listAll() {
        return BaseService.http.get('/albums')
            .catch(error => console.error(error));
    }

    static listByUserId(userId) {
        return BaseService.http.get(`/albums?userId=${userId}`)
        .catch(error => console.error(error));
    }

}