import axiosClient from "./axiosClient";

const cartApi = {

    addtocart(data){
        const url = 'api/v1/carts/create';
        return axiosClient.post(url,data);
    },

};

export default cartApi;