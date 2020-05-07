import axios from 'axios';
import { 
    API_URL, 
    TOKEN_API
} from "./ApiConstants";

export default {
    //Metodo Get
    get: function(name, {data = {}, urlParams = undefined, config = {}} = {}) {
        let headers = {headers: {}};
        headers.headers = {Authorization: `Bearer ${TOKEN_API}`};

        return axios.get(this.getUrl(name, urlParams), {params: data, ...headers, ...config});
    },
    //Metodo Post
    post: function (name, {data = {}, urlParams = undefined, config = {}} = {}) {
        let headers = {headers: {}};
        headers.headers = {Authorization: `Bearer ${TOKEN_API}`};

        return axios.post(this.getUrl(name, urlParams), data, {...headers, ...config});
    },
    //Parsing URL
    getUrl: function (endpoint, params = null) {
        let url = API_URL + endpoint;
        if (!!params) {
            let keys = Object.keys(params);
            keys.forEach(function (key) {
                url = url + '/' + params[key];
            });
            return url;
        }
        return url;
    },

}