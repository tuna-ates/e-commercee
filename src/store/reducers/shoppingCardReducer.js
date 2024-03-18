export const shoppingCardActions = {
    setCart: "SET_CARD",
    setPayment: "SET_PAYMENT",
    setAddress: "SET_ADDRESS"
}

const shoppingCardInitial = {
    cart: [],
    payment: {},
    address: {}
}

export const shoppingCardReducer = (state = shoppingCardInitial, action) => {
    switch (action.type) {
        case shoppingCardActions.setCart:
            return { ...state, cart: action.payload }
            break;

        case shoppingCardActions.setPayment:
            return { ...state, payment: action.payload }
            break;

        case shoppingCardActions.setAddress:
            return { ...state, address: action.payload }
            break;
        default:
            return state;
            break;
    }
}