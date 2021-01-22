/** @jsx jsx */
import { useEffect } from "react";
import Recipe from "./Recipe";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, RootStateOrAny } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { css, jsx } from "@emotion/core";
import AOS from "aos";
import "aos/dist/aos.css";
import RecipeInterface from "../Interfaces/RecipeInterface";

const RecipeList: React.FC = () => {
    const recipes = useSelector((state: RootStateOrAny) => state.results);
    const loading = useSelector((state: RootStateOrAny) => state.loading);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="recipe-list__container">
            {!loading ? (
                <div
                    css={css`
                        /* min-height: 100%; */
                        min-height: 100vh;
                        width: 100%;
                        box-sizing: border-box;
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fit,
                            minmax(500px, 1fr)
                        );
                    `}
                    className="recipe-list__wrapper"
                >
                    {recipes.map((recipe: RecipeInterface) => (
                        <Recipe key={uuidv4()} {...recipe}></Recipe>
                    ))}
                </div>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    );
};

export default RecipeList;
