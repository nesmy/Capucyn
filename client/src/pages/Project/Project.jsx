import React from "react";
import "./Project.scss";
import Art from "../../components/Art/Art";
import List from "../../components/List/List";

const Project = () => {
    return (
        <div className="project">
            <div className="item">
                <List Categories/>
            </div>
        </div>
    );
};


export default Project;