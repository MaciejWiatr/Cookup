/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RecipeButton from "./RecipeButton";
import RecipeInterface from "../Interfaces/RecipeInterface";

const Recipe: React.FC<RecipeInterface> = ({
    label,
    url,
    image,
    calories,
    ingredientLines,
    source,
}) => {
    return (
        <div
            data-aos="fade-up"
            css={css`
                margin: 2rem 0rem;
                position: relative;
                max-height: 500px;
                height: 20rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 100vw;

                @media only screen and (max-width: 600px) {
                    margin: -2rem 0px;
                }
            `}
            className="recipe__item"
        >
            <div
                css={css`
                    z-index: 10;
                    height: 100%;
                    width: 300px;
                    min-width: 300px;
                    transform: translateX(2rem);
                    img {
                        /* object-fit: contain; */
                        border-radius: 10px;
                        height: 100%;
                        max-width: 100%;
                    }

                    @media only screen and (max-width: 600px) {
                        /* transform: translateX(1rem); */
                        transform: translateX(20%);
                        width: 20vw !important;
                        min-width: initial;
                        min-width: 200px;
                        height: 200px;
                    }
                `}
                className="recipe__image"
            >
                <img
                    data-aos="zoom-in"
                    data-aos-offset="0"
                    src={image}
                    alt={`${label}`}
                ></img>
            </div>
            <div
                css={css`
                    height: 80%;
                    background-color: white;
                    width: 30%;
                    max-width: 400px;
                    min-width: 200px;
                    z-index: 15;
                    border-radius: 10px;
                    padding: 2rem;
                    box-sizing: border-box;
                    box-shadow: 0px 20px 37px 10px rgba(0, 0, 0, 0.1);
                    transform: translateX(-2rem);

                    h1 {
                        font-size: 1.2rem;
                    }

                    @media only screen and (max-width: 600px) {
                        transform: translateX(-20%);
                        h1 {
                            font-size: 0.9rem;
                        }
                        font-size: 0.7rem;
                        padding: 1rem;
                        /* width: 150px;
                        min-width: 150px; */
                        width: 20vw;
                        height: initial;
                        /* height: 30vh; */
                    }
                `}
                data-aos-delay="100"
                className="recipe__body"
            >
                <h1 className="recipe__title">
                    {label.substring(0, 45)}
                    {label.length >= 45 ? "..." : null}
                </h1>
                <p>by {source}</p>
                <a href={url}>
                    <RecipeButton text="Go to" />
                </a>
            </div>
        </div>
    );
};

export default Recipe;
