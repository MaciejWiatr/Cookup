/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";

const LoadingSpinner: React.FC = () => {
    const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
    `;

    return (
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
                        animation-name: ${spin};
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
    );
};

export default LoadingSpinner;
