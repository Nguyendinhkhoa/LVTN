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

    deleteCart(data) {
        const url = 'api/v1/carts/delete-cart' + '?CartId=' + data
        return axiosClient.delete(url)
    },
    updateQuantity(data,params){
        const url = 'api/v1/carts/update-cart'+'?CartId='+params;
        return axiosClient.put(url,data)
    }

};

export default cartApi;