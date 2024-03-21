import axios from "axios"
import { UserActions } from "../reducers/userReducer"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { FetchStates } from "../reducers/globalReducer";
import { toast } from "react-toastify";
import { LoginActions } from "../reducers/loginReducer";



export const loginActionCreator = (formData) => (dispatch, getState) => {

    dispatch({ type: UserActions.setUserFetchState, payload: FetchStates.fetching })
    axios.post("https://workintech-fe-ecommerce.onrender.com/login", formData)
        .then((res) => {
            dispatch({ type: UserActions.setUserFetchState, payload: FetchStates.fetched })
            dispatch({ type: UserActions.setUserEmail, payload: formData.email })
           


        }).catch((err) => {
            dispatch({ type: UserActions.setUserFetchState, payload: FetchStates.failed })

        })

}