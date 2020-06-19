/** @jsx jsx */
import { useEffect } from "react";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { css, jsx } from "@emotion/core";
import AOS from "aos";
import "aos/dist/aos.css";

const RecipeList = (props) => {
    const recipes = useSelector((state) => state.results);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            css={css`
                width: 100%;
                box-sizing: border-box;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            `}
            className="recipe-list__container"
        >
            {recipes.map((recipe) => (
                <Recipe key={uuidv4()} {...recipe}></Recipe>
            ))}
        </div>
    );
};

export default RecipeList;
