import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import { myLogger } from "./middleware/logger";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { storeReducer } from "./reducers/storeReducer";
import { shoppingCardReducer } from "./reducers/shoppingCardReducer";

export const reducers = combineReducers({
    global: globalReducer,
    user: userReducer,
    product:productReducer,
    store:storeReducer,
    shoppingCard:shoppingCardReducer

});

export const store = createStore(reducers,
    applyMiddleware(myLogger,thunk)
);