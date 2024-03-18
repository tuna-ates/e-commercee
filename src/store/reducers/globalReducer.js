
export const FetchStates = {
    notFetched: "NOT_FETCHED",
    fetching: "FETCHING",
    fetched: "FETCHED",
    failed: "FETCH_FAILED",
}

export const GlobalActions = {
    setGlobalRoles: "SET_GLOBAL_ROLES",
    setGlobalCategories: "SET_GLOBAL_CATEGORİES",
    setGlobalFetchState: "SET_GLOBAL_FETCH_STATE",
    setGlobalTheme: "SET_GLOBAL_THEME",
    setGlobalLanguage: "SET_GLOBAL_LANGUAGE"

}

const globalInitial = {
    roles: [],
    categories: [],
    theme: "light",
    language: "",
    fetchState: FetchStates.notFetched

}

export const globalReducer = (state = globalInitial, action) => {
    switch (action.type) {
        case GlobalActions.setGlobalRoles:
            return { ...state, roles: action.payload };
            break;

        case GlobalActions.setGlobalCategories:
            return { ...state, categories: action.payload };
            break;

        case GlobalActions.setGlobalFetchState:
            return { ...state, fetchState: action.payload };
            break;

        case GlobalActions.setGlobalTheme:
            return { ...state, theme: action.payload };
            break;

        case GlobalActions.setGlobalLanguage:
            return { ...state, theme: action.payload };
            break;

        default:
            return state;
            break;
    }
}