import axios from 'axios';

const PURCHASE_API_BASE_URL = "http://localhost:8080/api/purchase";

class PurchaseService {

    getPurchase(){
        return axios.get(PURCHASE_API_BASE_URL);
    }

    createPurchase(purchase){
        return axios.post(PURCHASE_API_BASE_URL, purchase);
    }

    getPurchaseById(purchaseId){
        return axios.get(PURCHASE_API_BASE_URL + '/' + purchaseId);
    }

    updatePurchase(purchase, purchaseId){
        return axios.put(PURCHASE_API_BASE_URL + '/' + purchaseId, purchase);
    }

    deletePurchase(purchaseId){
        return axios.delete(PURCHASE_API_BASE_URL + '/' + purchaseId);
    }
}

export default new PurchaseService()