import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["auth"],
    blacklist: []
};

import auth from "./authReducer";
import test from "./testReducer";

const rootReducer = combineReducers({ 
    test, 
    auth
});

export default persistReducer(persistConfig, rootReducer);