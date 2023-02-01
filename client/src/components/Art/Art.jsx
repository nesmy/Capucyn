import React from "react";
import "./Art.scss";
import {Link} from "react-router-dom";

const Art = ({item}) => {

    console.log(item.attributes.img.data[0]);

    return (
        <div className="art">
                <Link className="link" to={`/art/${item.id}`}> 
                <div className="img">
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="test" className="mainImg" />
                </div>
                <div className="prices">
                    <h2>{item?.attributes?.title}</h2>
                    <h3>${item?.attributes?.price}</h3>
                </div>
        </Link>
            </div>
    );
};

export default Art;