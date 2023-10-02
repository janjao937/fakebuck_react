import axios from "axios";
import {BACKEND_URL} from "./env";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

//axios.interceptors.request.use(configObject,error)//https://axios-http.com/docs/interceptors
axios.interceptors.request.use((config)=>{
    const token = getAccessToken();
    if(token){
        config.headers.Authorization=`Bearer ${token}`;   
    }

    return config;

},(error)=>{
    console.log(error);
});

axios.interceptors.request.use((response)=>response,(err)=>{
    if(err.response.status() === 401){
        removeAccessToken();
        window.location.href ="/login";
    }
    return Promise.reject(err);
});
export default axios;