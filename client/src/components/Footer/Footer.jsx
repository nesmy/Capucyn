import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="item">
                    <Link className="link">Refund Policy</Link>
                </div>
                <div className="item">
                    <Link className="link">Shipping Policy</Link>
                </div>
                <div className="item">
                    <Link className="link">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};


export default Footer;