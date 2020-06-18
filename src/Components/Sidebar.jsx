import React from "react";
import "./Sidebar.scss";
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";

const Sidebar = (props) => {
    return (
        <div className="sidebar__container">
            <header className="sidebar__header">
                <h1 className="header__title">Cookup 👀</h1>
                <p className="header__subtitle">Lookup recipes!</p>
            </header>
            <SearchForm />
            <RecipeList />
        </div>
    );
};

export default Sidebar;
