/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const RecipeButton = ({ text }) => {
    return (
        <button
            css={css`
                background-color: #ffb5a7;
                border: none;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                transition: 0.25s ease background-color, 0.25s ease transform;
                &:hover {
                    transform: scale(1.1);
                    cursor: pointer;
                    background-color: #eea4a6;
                }
            `}
        >
            {text}
        </button>
    );
};

export default RecipeButton;
