/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Recipe = ({ label, url, image, calories, ingredients }) => {
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
                        transform: translateX(5rem);
                    }
                `}
                className="recipe__image"
            >
                <img data-aos="zoom-in" src={image} alt={`${label}`}></img>
            </div>
            <div
                css={css`
                    height: 80%;
                    background-color: white;
                    width: 30%;
                    max-width: 400px;
                    min-width: 250px;
                    z-index: 15;
                    border-radius: 10px;
                    padding: 2rem;
                    box-sizing: border-box;
                    box-shadow: 0px 20px 37px 10px rgba(0, 0, 0, 0.1);
                    transform: translateX(-2rem);

                    h1 {
                        font-size: 1.5rem;
                    }

                    @media only screen and (max-width: 600px) {
                        transform: translateX(-5rem);
                    }
                `}
                data-aos-delay="100"
                className="recipe__body"
            >
                <h1 className="recipe__title">{label}</h1>
                <p>{Math.floor(calories)} calories</p>
                <a href={url}>
                    <button
                        css={css`
                            background-color: #ffb5a7;
                            border: none;
                            color: white;
                            padding: 0.5rem 1rem;
                            border-radius: 5px;
                            transition: 0.25s ease background-color,
                                0.25s ease transform;
                            &:hover {
                                transform: scale(1.1);
                                cursor: pointer;
                                background-color: #eea4a6;
                            }
                        `}
                    >
                        Go to
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Recipe;
