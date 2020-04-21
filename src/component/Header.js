import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import Navigation from "./Navigation";

function Header() {
    return(
        <div className="header">
            <div className="header-title">
                <img src={logo}></img>
                <h1>Movie</h1>
            </div>

            <div className="navigation">
                <Navigation />
                <div className="menuIcon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Header;