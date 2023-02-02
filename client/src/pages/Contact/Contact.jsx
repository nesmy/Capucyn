import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form action={console.log("WORKS!")} className="form">
                
                <input type="text" placeholder="Name" />

                
                <input type="email" placeholder="Email" />

                <textarea type="text" placeholder="what you wanna say?" className="text"></textarea>

                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
    );
};


export default Contact;