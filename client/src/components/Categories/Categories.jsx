import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () =>{
    return(
        <div className="categories">
            <Link to="/project/1">
                <div className="item"></div>
            </Link>
        </div>
    );
};

export default Categories;