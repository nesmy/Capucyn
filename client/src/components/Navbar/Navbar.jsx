import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="item" >
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/projects">Projects</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/contact">Contact</Link>
                </div>
                
            </div>
        </div>
    );
};


export default Navbar;