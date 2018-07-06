export const ADDITEM = 'ADD_ITEM';

export const addToPlaylist = (data) => {
    return {
        type: ADDITEM,
        data
    }
};
