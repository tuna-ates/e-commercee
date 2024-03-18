import axios from "axios"
import { UserActions } from "../reducers/userReducer"


export const loginActionCreator = (formData) => (dispatch, getState) => {

    axios.post("https://workintech-fe-ecommerce.onrender.com/login", formData)
        .then((res) => {
            dispatch({ type: UserActions.setUserEmail, payload: formData.email })

        })

}