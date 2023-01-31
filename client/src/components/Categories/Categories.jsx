import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = ({item}) =>{
    console.log(item);
    return(
        <Link className="link" to={`/project/${item.id}`}>
            <div className="categories">
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" className="img" />
            </div>
        </Link>
    );
};

export default Categories;