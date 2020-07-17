import { combineReducers } from 'redux'
import * as actionTypes from "../actions/types";

let listID = 1;
let cardID = 2;

const initialListState = [
    {
        title: "To do",
        id: 0,
        cards: [
            {
                id: 0,
                text: "card text to do "
            },
            {
                id: 1,
                text: "card text1 to do"
            }
        ]
    }
];


const listsReducer = (state = initialListState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID += 1;
            return [...state, newList];

        case actionTypes.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
            };
            cardID += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.cardID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });

            return newState

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    lists: listsReducer
});

export default rootReducer;