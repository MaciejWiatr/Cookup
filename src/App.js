/** @jsx jsx */
import SearchForm from "./Components/SearchForm";
import RecipeList from "./Components/RecipeList";
import Footer from "./Components/Footer";
import { css, jsx } from "@emotion/core";

const App = (props) => {
    return (
        <div
            css={css`
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                margin: 0;
                background-color: #f8edeb !important;
            `}
            className="app__container"
        >
            <svg
                css={css`
                    @media only screen and (min-width: 900px) {
                        transform: translateY(-20%);
                    }
                `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L26.7,138.7C53.3,149,107,171,160,170.7C213.3,171,267,149,320,122.7C373.3,96,427,64,480,85.3C533.3,107,587,181,640,192C693.3,203,747,149,800,117.3C853.3,85,907,75,960,85.3C1013.3,96,1067,128,1120,133.3C1173.3,139,1227,117,1280,122.7C1333.3,128,1387,160,1413,176L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
                ></path>
            </svg>
            <header
                className="app__header"
                css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    @media only screen and (max-width: 600px) {
                        align-items: flex-start;
                        padding: 0px 15%;
                    }
                    @media only screen and (min-width: 900px) {
                        transform: translateY(-20%);
                    }
                `}
            >
                <h1
                    className="header__title"
                    css={css`
                        margin-top: 0px;
                        font-size: 2.5rem;
                        user-select: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @media only screen and (max-width: 600px) {
                            font-size: 1.5rem;
                        }
                    `}
                >
                    Cookup{" "}
                    <span
                        css={css`
                            margin-left: ".5rem";
                            transform: translateY(-2px);
                        `}
                        role="img"
                        aria-label="eyes"
                    >
                        🍰
                    </span>{" "}
                </h1>
            </header>
            <SearchForm />
            <RecipeList />
            <Footer />
        </div>
    );
};

export default App;
