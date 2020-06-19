import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import allReducers from "./reducer";
import persistState from "redux-localstorage";

const enchancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    persistState()
);

const store = createStore(allReducers, enchancers);

const StoreProvider = (props) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
