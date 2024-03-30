import axios from "axios";
import { createContext, useState } from "react";

export const authContex = createContext();

const baseUrl = "https://workintech-fe-ecommerce.onrender.com/";

const AuthContexProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState({})
    const [userLoginError, setUserError] = useState()
    const axiosWithAuthInstance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: { authorization: userLogin.token }
    });
    const login = (data) => {
        axios
            .post(`${baseUrl}login`, data)
            .then((res) => {
                setUserLogin(res.data)
                setUserError(null)
            }).catch((err) => {
                setUserError(err.response.data.error);
            })
    }

    const isLoggedIn = userLogin.hasOwnProperty("token");


    return (
        <authContex.Provider >
            { children }
        </authContex.Provider >
    )
}