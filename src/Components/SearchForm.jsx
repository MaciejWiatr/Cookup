/** @jsx jsx */
import "./SearchForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateResults, updateQuery, loadingOn, loadingOff } from "../actions";
import axios from "axios";
import { css, jsx } from "@emotion/core";
// import { useState } from "react";

const SearchForm = (props) => {
    const query = useSelector((state) => state.query);

    const dispatch = useDispatch();

    const handleQueryInput = (event) => {
        dispatch(updateQuery(event.target.value));
    };

    const fetchRecipes = async (q) => {
        if (!q) {
            return;
        }
        const APP_ID = "f307a3f5";
        const APP_KEY = "f1fa4c826144fa785fc6101b0b9196d3";
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        dispatch(loadingOn());
        const data = await axios.get(url);

        if (data.status === 200) {
            const recipes = data.data.hits
                .map((hit) => hit.recipe)
                .map((recipe) => {
                    return {
                        label: recipe.label,
                        url: recipe.url,
                        ingredients: recipe.ingredientLines,
                        image: recipe.image,
                        calories: recipe.calories,
                        source: recipe.source,
                    };
                });
            dispatch(updateResults(recipes));
            dispatch(loadingOff());
        }
    };
    return (
        <div
            css={css`
                margin-bottom: 2rem;
            `}
            className="search__container"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchRecipes(e.target.elements.q.value);
                }}
                className="search__form"
            >
                <input
                    css={css`
                        border: none;
                        box-shadow: 0px 20px 37px 10px rgba(0, 0, 0, 0.1);
                        border-radius: 2rem;
                        padding: 1.5rem;
                    `}
                    type="text"
                    name="q"
                    onChange={handleQueryInput}
                    value={query ? query : ""}
                    placeholder="Search"
                />
            </form>
        </div>
    );
};

export default SearchForm;
