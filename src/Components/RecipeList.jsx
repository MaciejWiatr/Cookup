/** @jsx jsx */
import { useEffect } from "react";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { css, jsx, keyframes } from "@emotion/core";
import AOS from "aos";
import "aos/dist/aos.css";

const RecipeList = (props) => {
    const recipes = useSelector((state) => state.results);
    const loading = useSelector((state) => state.loading);
    useEffect(() => {
        AOS.init();
    }, []);

    const bounce = keyframes`
    to{
        transform: rotate(360deg);
    }
    `;

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
                    {recipes.map((recipe) => (
                        <Recipe key={uuidv4()} {...recipe}></Recipe>
                    ))}
                </div>
            ) : (
                <div data-aos="zoom-in" id="loading__container">
                    <div
                        css={css`
                            padding: 2rem;
                            text-align: center;
                            height: 100vh !important;
                        `}
                        className="spinner__container"
                    >
                        <p>Loading</p>
                        <div
                            css={css`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                text-align: center;
                                animation-name: ${bounce};
                                animation-duration: 2s;
                                animation-timing-function: ease;
                                animation-iteration-count: infinite;
                            `}
                            className="spinner"
                        >
                            <span role="img" aria-label="burger">
                                🍔
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeList;
