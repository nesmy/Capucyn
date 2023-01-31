import React from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Projects.scss";

const Projects = () => {

    const { data, loading, error} = useFetch(
        `/projects?populate=*`
    );
        console.log(data);
    return (
        <div className="projects">
            <div className="top"></div>
            <div className="item">
                    <List/>
            </div>
        </div>
    );
};

export default Projects;