import { combineReducers } from "redux";

const resultsReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE_RESULTS":
            return action.payload;
        default:
            return state;
    }
};

const queryReducer = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_QUERY":
            return action.payload;
        default:
            return state;
    }
};

const allReducers = combineReducers({
    results: resultsReducer,
    query: queryReducer,
});

export default allReducers;
