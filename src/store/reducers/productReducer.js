import { FetchStates } from "./globalReducer"


export const ProductActions = {
    setProductList: "SET_PRODUCT_LİST",
    setProductCount: "SET_PRODUCT_COUNT",
    setProductPageCount: "SET_PRODUCT_PAGE_COUNT",
    setPoductActivePage: "SET_PRODUCT_ACTİVE_PAGE",
    setProductFetchState: "SET_PRODUCT_FETCH_STATE",

}

const productInitial = {
    productList: [],
    productCount: 0,
    pageCount: 0,
    activePage: 0,
    fetchState: FetchStates.notFetched
}

export const productReducer = (state = productInitial, action) => {
    switch (action.type) {
        case ProductActions.setProductList:
            return { ...state, productList: action.payload }
            break;

        case ProductActions.setProductCount:
            return { ...state, productCount: action.payload }
            break;

        case ProductActions.setProductPageCount:
            return { ...state, pageCount: action.payload }
            break;

        case ProductActions.setPoductActivePage:
            return { ...state, activePage: action.payload }
            break;

        case ProductActions.setProductFetchState:
            return { ...state, fe: action.payload }
            break;
        default:
            return state;
            break;
    }
}