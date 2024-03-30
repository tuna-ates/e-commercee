import axios from "axios";
import { useSelector } from "react-redux";

function useAxiosInstance() {

    const baseUrl = "https://workintech-fe-ecommerce.onrender.com/";
    const token = useSelector(store => store.user.token)
    const axiosWithAuthInstance = axios.create({
        baseURL: baseUrl,
        timeout: 1000,
        headers: { Authorization: token }
    });






    return { axiosWithAuthInstance };
}

export default useAxiosInstance;

