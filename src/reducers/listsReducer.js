import { CONSTANTS } from "../actions";

let listID = 4;
let cardID = 2;

const initialState = [
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
    },
    {
        title: "Doing",
        id: 1,
        cards: [
            {
                id: 0,
                text: "card text doing"
            },
            {
                id: 1,
                text: "card text1 doing"
            }
        ]
    },
    {
        title: "Done",
        id: 2,
        cards: [
            {
                id: 0,
                text: "card text done"
            },
            {
                id: 1,
                text: "card text1 done"
            }
        ]
    }
];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
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

export default listsReducer;
