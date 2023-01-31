import React from "react";
import "./Project.scss";
import useFetch from "../../hooks/useFetch";
import ListA from "../../components/List/ListA";
import { useParams } from "react-router-dom";

const Project = () => {
    
    const id = parseInt(useParams().id);

      const { data, loading, error } = useFetch(
    `/projects/${id}?populate=*`
  );
    console.log(data?.attributes?.arts?.data);
    
    return (

        <div className="project">

            <div className="space">

            </div>
            <div className="item">
                <ListA  data={data?.attributes?.arts?.data} loading={loading}/>
            </div>
        </div>
    );
};


export default Project;