import React from "react";
import "./SearchForm.scss";
import { useDispatch } from "react-redux";
import { update } from "../actions";
import axios from "axios";
import { useState } from "react";

const SearchForm = (props) => {
    const [query, setQuery] = useState();
    const dispatch = useDispatch();

    const fetchRecipes = async (q) => {
        console.log(q);
        const APP_ID = "f307a3f5";
        const APP_KEY = "f1fa4c826144fa785fc6101b0b9196d3";
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
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
                    };
                });
            dispatch(update(recipes));
        }
    };
    return (
        <div className="search__container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchRecipes(e.target.elements.q.value);
                }}
                className="search__form"
            >
                <input
                    type="text"
                    name="q"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query ? query : ""}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;
