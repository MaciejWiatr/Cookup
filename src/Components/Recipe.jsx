/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Recipe = ({ label, url, image, calories }) => {
    return (
        <div
            css={css`
                height: 5rem;
                /* width: 100%; */
                background-color: white;
                box-shadow: 0px 20px 43px -12px rgba(0, 0, 0, 0.3);
                margin: 1rem;
                border-radius: 5px;
                box-sizing: border-box;
            `}
            className="recipe__item"
        >
            {label}
        </div>
    );
};

export default Recipe;
