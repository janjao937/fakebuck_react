import axios from "axios";
import {BACKEND_URL} from "./env";
// axios.create({
//     baseURL: env.BACKEND_URL,
//     timeout: 1000,
//     // headers: { Authorization: `Bearer ${token}` }
//   });

axios.defaults.baseURL = BACKEND_URL;

export default axios;