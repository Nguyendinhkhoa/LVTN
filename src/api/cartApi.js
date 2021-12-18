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
        let temp = 'api/v1/carts/delete-cart?CartId=';
        const url = temp.concat(data)
        console.log(url);
        return axiosClient.delete(url);
    },
    updateQuantity(data,params){
        let temp = 'api/v1/carts/update-cart?CartId=';
        const url = temp.concat(params)
        return axiosClient.put(url,data)
    }

};

export default cartApi;