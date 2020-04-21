import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css";

function Navigation() {
    return(
        <div className="linkBtn">
            <Link to="/">Home</Link>
        </div>
    );
}

export default Navigation;