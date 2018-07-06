export const ADDITEM = 'ADD_ITEM';

export const addToPlaylist = (text) => {
    return {
        type: ADDITEM,
        text
    }
};