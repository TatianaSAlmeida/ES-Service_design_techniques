import axios from 'axios';

const PHARMACIST_API_BASE_URL = "http://localhost:8080/api/pharmacist";

class PharmacistService {

    getPharmacist(){
        return axios.get(PHARMACIST_API_BASE_URL);
    }

    createPharmacist(pharmacist){
        return axios.post(PHARMACIST_API_BASE_URL, pharmacist);
    }

    getPharmacistById(pharmacistId){
        return axios.get(PHARMACIST_API_BASE_URL + '/' + pharmacistId);
    }

    updatePharmacist(pharmacist, pharmacistId){
        return axios.put(PHARMACIST_API_BASE_URL + '/' + pharmacistId, pharmacist);
    }

    deletePharmacist(pharmacistId){
        return axios.delete(PHARMACIST_API_BASE_URL + '/' + pharmacistId);
    }
}

export default new PharmacistService()