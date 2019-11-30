import BaseService from './BaseService'

const BASE_URL = '/ride';

export default class RideService {

    static listAll() {
        return BaseService.localApi.get(BASE_URL)
            .catch(error => console.error(error));
    }

}