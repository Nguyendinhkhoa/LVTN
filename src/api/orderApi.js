import axiosClient from "./axiosClient";

const orderApi = {

    createOder(data){
        const url = 'api/v1/orders/create';
        return axiosClient.post(url,data);
    },
    getOrder(params){
        const url = '/api/v1/orders/';
        return axiosClient.get(url,{params});
    },
    getOderById(params){
        const url="/api/v1/orders/get-order";
        return axiosClient.get(url,{params});
    },
    cancelOrder(data){
        const url="/api/v1/orders/cancel-order";
        return axiosClient.post(url,data);
    }


};

export default orderApi;