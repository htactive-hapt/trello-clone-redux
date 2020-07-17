import React from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import { deleteList } from '../actions'

const List = ({ title, cards }) => {

    const handleDeleteList = (title) => {
        const { dispatch } = this.props;
        console.log("Delete List", title);

        if (title) {
            dispatch(deleteList(title));
        }
        return;
    }
    return (
        <div className="lists">
            <div className="list">
                {console.log(title, cards, "Trello List")}
                <p ><strong>{title}</strong> <span onClick={() => handleDeleteList(title)} className="glyphicon glyphicon-remove-circle"></span></p>
                {cards && cards.map(card => (
                    <Card key={card.id} text={card.text} />
                ))}
                <AddButton card />
            </div>
        </div>
    );
};

export default List;