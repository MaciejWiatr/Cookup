import RecipeInterface from "./Interfaces/RecipeInterface";

export const updateResults = (results: RecipeInterface[]) => {
    return {
        type: "UPDATE_RESULTS",
        payload: results,
    };
};

export const updateQuery = (q: string) => {
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
