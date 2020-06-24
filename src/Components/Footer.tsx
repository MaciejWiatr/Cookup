/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Footer: React.FC = () => {
    return (
        <div
            css={css`
                /* position: absolute; */
                bottom: 0px;
                /* width: 100%; */
                background-color: #202020;
                color: white;
                text-align: center;
                padding: 1rem;
                font-size: 0.8rem;
                margin: 0px;
            `}
        >
            Created by{" "}
            <a
                css={css`
                    color: white;
                `}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MaciejWiatr/Cookup"
            >
                Maciej Wiatr
            </a>
        </div>
    );
};

export default Footer;
