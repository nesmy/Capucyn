import React from "react";
import "./Art.scss";
import {Link} from "react-router-dom";

const Art = ({item}) => {
    return (
        <Link className="link" to={`/project/${item.id}`}>
            <div className="art">
                <div className="img">
                    <img src="" alt="" className="mainImg" />
                </div>
                <h2>Name</h2>
                <div className="prices">
                    <h3>$10</h3>
                </div>
            </div>
        </Link>
    );
};

export default Art;