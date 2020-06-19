export const updateResults = (results) => {
    return {
        type: "UPDATE_RESULTS",
        payload: results,
    };
};

export const updateQuery = (q) => {
    return {
        type: "UPDATE_QUERY",
        payload: q,
    };
};

export const loadingOn = () => {
    return {
        type: "LOADING_ON",
    };
};

export const loadingOff = () => {
    return {
        type: "LOADING_OFF",
    };
};
