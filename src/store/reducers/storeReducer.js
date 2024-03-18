
export const StoreActions = {
    setStoreName: "SET_STORE_NAME",
    setStorePhone: "SET_STORE_PHONE",
    setTaxtId: "SET_TAXT_ID",
    setIbanNo: "SET_IBAN_NO"
}
const storeInitial = {
    storeName: "",
    storePhone: "",
    taxId: "",
    ibanNo: "",
}

export const storeReducer = (state = storeInitial, action) => {
    switch (action.type) {
        case StoreActions.setStoreName:
            return { ...state, storeName: action.payload }
            break;

        case StoreActions.setStorePhone:
            return { ...state, storePhone: action.payload }
            break;

        case StoreActions.setTaxtId:
            return { ...state, taxId: action.payload }
            break;

        case StoreActions.setIbanNo:
            return { ...state, ibanNo: action.payload }
            break;
        default:
            return state;
            break;
    }
}