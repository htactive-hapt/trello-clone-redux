import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton />
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "lightgrey",
        borderRadius: 3,
        width: "23%",
        minWidth: "300px",
        padding: "8px",
        margin: "10px",
        heigth: "100%"
    }
};

export default TrelloList;
