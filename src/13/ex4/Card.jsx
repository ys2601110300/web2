import React from "react";
import "./Card.css";

function Card(props){
    const {title, backgroundColor, children} = props;

    return(
        <div className="profile-card" style={{ backgroundColor }}>
            {title && <h1 className="profile-card__title">{title}</h1>}
            {children}
        </div>
    );
}

export default Card;