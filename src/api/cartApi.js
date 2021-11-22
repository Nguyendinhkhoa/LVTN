import axiosClient from "./axiosClient";

const cartApi = {

    addtocart(data){
        const url = 'api/v1/carts/create';
        return axiosClient.post(url,data);
    },
    getCart(data){
        const url = 'api/v1/carts/';
        return axiosClient.get(url);
    },

};

export default cartApi;