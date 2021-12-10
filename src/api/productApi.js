import axiosClient from "./axiosClient";

const productApi = {
    getAll(params){
        const url = 'api/v1/products';
        return axiosClient.get(url,{params});   
    },

    get(params){
        const url = `api/v1/products/get-product`;
        return axiosClient.get(url,{params});
    },
    search(params){
        const url = `api/v1/products/search-product`;
        return axiosClient.get(url,{params});
    },
    recommend(params){
        const url = `api/v1/products/recommend`;
        return axiosClient.get(url,{params});
    },

    add(data){
        const url = `/products/`;
        
        return axiosClient.post(url,data);
    },
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url,data);
    },

    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url,id);
    }


};

export default productApi;