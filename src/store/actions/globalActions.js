import axios from "axios"
import { GlobalActions } from "../reducers/globalReducer"


export const globalActionCreator = () => (dispatch, getState) => {

    axios.get("https://workintech-fe-ecommerce.onrender.com/roles")
        .then((res) => {
            //setSelectData(res.data)
            dispatch({ type: GlobalActions.setGlobalRoles, payload: res.data })
        })
        .catch((err) => {
            console.log(err.message);
        })
}