import React from "react";
import "./Art.scss";
import {Link} from "react-router-dom";

const Art = ({item}) => {
    return (
        <div className="art">
                <Link className="link" to={`/art/${item.id}`}>
                <div className="img">
                    <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="mainImg" />
                </div>
                <div className="prices">
                    <h2>Name</h2>
                    <h3>$10</h3>
                </div>
        </Link>
            </div>
    );
};

export default Art;