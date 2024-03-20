import { FetchStates } from "./globalReducer";

export const UserActions = {
    setUsers: "SET_USERS",
    setUserEmail: "SET_USER_EMAİL",
    setUsetFirstname: "SET_USER_FİRST_NAME",
    setUserLastname: "SET_USER_LAST_NAME",
    setUserPhone: "SET_USER_PHONE",
    setUserRole: "SET_USER_ROLE",
    setUserFetchState: "SET_FETCH_STATE"

}

export const userInitial = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    fetchState: FetchStates.notFetched

}

export const userReducer = (state = userInitial, action) => {

    switch (action.type) {

        case UserActions.setUserEmail:
            return { ...state, email: action.payload }
            break;

        case UserActions.setUsetFirstname:
            return { ...state, firstName: action.payload }
            break;

        case UserActions.setUserLastname:
            return { ...state, lastName: action.payload }
            break;

        case UserActions.setUserPhone:
            return { ...state, phone: action.payload }
            break;

        case UserActions.setUserRole:
            return { ...state, role: action.payload }
            break;

        case UserActions.setUserFetchState:
            return { ...state, fetchState: action.payload }
            break;

        default:
            return state;
            break;
    }
}