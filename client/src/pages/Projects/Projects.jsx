import React from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Projects.scss";

const Projects = () => {

    const { data, loading, error} = useFetch(
        `/products?populate=*`
    );

    return (
        <div className="projects">
            <div className="top"></div>
            <div className="item">
                    <List Card={Categories} data={data} key={data.id}/>
            </div>
        </div>
    );
};

export default Projects;