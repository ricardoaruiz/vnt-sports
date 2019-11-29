import BaseService from './BaseService';

const BASE_URL = '/photos'

export default class PhotoService {

    static listAll() {
        return BaseService.http.get(`${BASE_URL}`)
            .catch(error => console.error(error));
    }

    static listByUserId(albumId) {
        return BaseService.http.get(`${BASE_URL}?albumId=${albumId}`)
        .catch(error => console.error(error));
    }

}