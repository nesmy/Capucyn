import React from "react";
import "./List.scss";

const List = ({Card, data}) => {


    return(
        <div className="list">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    );
};


export default List;