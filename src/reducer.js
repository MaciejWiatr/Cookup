import { combineReducers } from "redux";

const resultsReducer = (state = [], action) => {
    switch (action.type) {
        case "UPDATE":
            return action.payload;
        default:
            return state;
    }
};

const allReducers = combineReducers({
    results: resultsReducer,
});

export default allReducers;
