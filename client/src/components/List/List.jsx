import React from "react";
import "./List.scss";
import useFetch from "../../hooks/useFetch";
import Categories from "../Categories/Categories";

const List = () => {

     const { data, loading, error } = useFetch(
    `/projects?populate=*&`
  );
        console.log(data)
    return(
        <div className="list">
            {loading
        ? "loading"
        : data?.map((item) => <Categories item={item} key={item.id} />)}</div>
    );
};


export default List;