import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import allReducers from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const enchancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// let store = createStore(allReducers, enchancers);
let store = createStore(persistedReducer, enchancers);
let persistor = persistStore(store);

const StoreProvider = (props) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;
