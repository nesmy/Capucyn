import React from "react";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <img src={require("./img/banner.jpeg")} alt="banner" />
                <h1>Capucyne</h1>
            </div>
            <div className="about" id="about">
                <div className="col">
                    <div className="row">
                        <h1>Meet Capucyne D&D</h1>
                        <h2>Protfolio of Artwork</h2>
                    </div>
                    <div className="row">
                        <img src={require('./img/profile.jpeg')} alt="profile" />
                    </div>
                </div>
                <p>Capucyne D&D (Drawings & Designs) is an upcoming artist based in Montreal,Canada. 
                    Their work offers perspective into a variety of themes in a way that is accessible to a wide range of audiences. To learn more, get in touch.</p>
            </div>
        </div>
    );
};


export default Home;