import * as actionTypes from '../actions/types'

export const addCard = (text) => {
    return {
        type: actionTypes.ADD_CARD,
        payload: { text }
    };
};

export const addList = (title) => {
    return {
        type: actionTypes.ADD_LIST,
        payload: title
    };
};

export const deleteList = (title, action) => {
    const { listId } = action.payload;
    const filterDeleted = tmpListId => tmpListId !== listId;
    const newLists = ""
    return {
        lists: newLists
    };
};

