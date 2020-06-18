import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import allReducers from "./reducer";

const enchancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(allReducers, enchancers);

const StoreProvider = (props) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default StoreProvider;
