import { FetchStates } from "./globalReducer";

export const LoginActions = {
    setUserEmail: "SET_USER_EMAİL",
    setLoginFetchState: "SET_FETCH_STATE"
}

export const loginInitial = {
    email: "",
    fetchState: FetchStates.notFetched
}
export const loginReducer = (state = loginInitial, action) => {
    switch (action.type) {
        case LoginActions.setUserEmail:
            return { ...state, email: action.payload }
            break;

        case LoginActions.setLoginFetchState:
            return { ...state, fetchState: action.payload }
            break;

        default:
            return state;
            break;
    }
}