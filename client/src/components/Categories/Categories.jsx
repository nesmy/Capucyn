import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = ({item}) =>{
    console.log(item?.id);
    return(
        <Link className="link" to={{ 
                    pathname: `/project/${item?.id}`,
                    state: item?.attributes?.arts?.data}}>
            <div className="categories">
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" className="img" />
            </div>
        </Link>
    );
};

export default Categories;