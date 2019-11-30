import BaseService from './BaseService'

const BASE_URL = '/frequency';

export default class FrequencyService {

    static listAll() {
        return BaseService.localApi.get(BASE_URL)
            .catch(error => console.error(error));
    }

}