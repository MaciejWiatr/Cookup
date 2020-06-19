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
