import { combineReducers } from "redux";
import ActionInterface from "./Interfaces/ActionInterface";

const resultsReducer = (state = [], action: ActionInterface) => {
    switch (action.type) {
        case "UPDATE_RESULTS":
            return action.payload;
        default:
            return state;
    }
};

const queryReducer = (state = "", action: ActionInterface) => {
    switch (action.type) {
        case "UPDATE_QUERY":
            return action.payload;
        default:
            return state;
    }
};

const loadingReducer = (state = false, action: ActionInterface) => {
    switch (action.type) {
        case "LOADING_ON":
            return true;
        case "LOADING_OFF":
            return false;
        default:
            return state;
    }
};

const allReducers = combineReducers({
    results: resultsReducer,
    query: queryReducer,
    loading: loadingReducer,
});

export default allReducers;
