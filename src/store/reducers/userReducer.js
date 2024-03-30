import { FetchStates } from "./globalReducer";

export const UserActions = {
    setUsers: "SET_USERS",
    setUserEmail: "SET_USER_EMAİL",
    setUsetFirstname: "SET_USER_FİRST_NAME",
    setUserLastname: "SET_USER_LAST_NAME",
    setUserPhone: "SET_USER_PHONE",
    setUserRole: "SET_USER_ROLE",
    setUserFetchState: "SET_FETCH_STATE",
    setLoginUser: "SET_LOGİN_USER",
    setToken: "SET_TOKEN"

}

export const userInitial = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    fetchState: FetchStates.notFetched,
    login: FetchStates.logdin,
    token: ""

}

export const userReducer = (state = userInitial, action) => {

    switch (action.type) {

        case UserActions.setUserEmail:
            return { ...state, email: action.payload }
            break;

        case UserActions.setUsetFirstname:
            localStorage.setItem("name",action.payload)
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

        case UserActions.setToken:
            localStorage.setItem("token", action.payload)
            return { ...state, token: action.payload }
            break;

        case UserActions.setLoginUser:
            return { ...state, login: action.payload }
            break;

        default:
            return state;
            break;
    }
}