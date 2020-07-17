import React from "react";

const TrelloCard = ({ text }) => {
    return (
        <div style={styles.cardContainer}>
            <div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        marginBottom: "8px"
    }
}
export default TrelloCard;
