import React from "react";
import Art from "../Art/Art";
import "./ListA.scss";

const ListA = ({data , loading}) => {

        console.log(data)
    return(
        
        
        <div className="listA">
            {loading
        ? "loading"
        : data?.map((item) => <Art item={item} key={item.id} />)}
        
        </div>
    );
};

export default ListA;