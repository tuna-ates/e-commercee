import { toast } from "react-toastify";
import { UserActions } from "../reducers/userReducer";
import axios from "axios";
import { useHistory } from "react-router-dom";


export const loginUserActionCreator = (formData) => (dispatch, getState) => {

    axios.post("http://localhost:9001/auth/register", formData)
        .then((res) => {
            dispatch({ type: UserActions.setUsetFirstname, payload: formData.firstName });
            dispatch({ type: UserActions.setUserLastname, payload: formData.lastName });
            dispatch({ type: UserActions.setUserEmail, payload: formData.email });
            dispatch({ type: UserActions.setUserPhone, payload: formData.phone });
            dispatch({ type: UserActions.setUserRole, payload: formData.role_id });
             dispatch({ type: UserActions.setStoreName, payload: formData.storeName });
             dispatch({ type: UserActions.setStorePhone, payload: formData.storePhone });
             dispatch({ type: UserActions.setTaxtId, payload: formData.taxId });
             dispatch({ type: UserActions.setIbanNo, payload: formData.ıbanNo });

            toast.info('Hesabınızı aktifleştirmek için e-postadaki bağlantıya tıklayınız', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
            console.log("data kaydedildi: ", res.data);
            //history.push("/")
        }).catch((err) => {
            toast.error('Kullanıcı kaydedilemedi lütfen formu kontrol ediniz', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",

            });
            console.log("hata var!!", err.response.data);
        })
}