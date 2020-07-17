import React from "react";
const Card = ({ text }) => {
    return (
        <React.Fragment>
            <div className="cards" >
                {text}
            </div>
        </React.Fragment>
    );
};

export default Card;
