import Recipe from "./Recipe";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const RecipeList = (props) => {
    const recipes = useSelector((state) => state.results);
    return (
        <div
            css={css`
                width: 100%;
                box-sizing: border-box;
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
