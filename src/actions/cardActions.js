import { CONSTANTS } from '../actions'

export const addList = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listID }
    };
};
