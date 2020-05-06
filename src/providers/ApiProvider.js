import httpClient from "./HttpClient";
import { 
    USER_DATA,
    USER_HISTORY,
    USER_POINTS,
    PRODUCT_REDEEM,
    PRODUCTS
} from "./ApiConstants";

export default {
    getUserData: async () => {
        try {
            let response = await httpClient.get(USER_DATA);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    getUserHistory: async () => {
        try {
            let response = await httpClient.get(USER_HISTORY);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    getProducts: async () => {
        try {
            let response = await httpClient.get(PRODUCTS);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    addUserPoints: async (data) => {
        let request = {
            data: data,
        };
        try {
            let response = await httpClient.post(USER_POINTS, request);
            return response.data;
        } catch (e) {
            return false;
        }
    },
    redeemProduct: async (data) => {
        let request = {
            data: data,
        };
        try {
            let response = await httpClient.post(PRODUCT_REDEEM, request);
            return response.data;
        } catch (e) {
            return false;
        }
    },
}