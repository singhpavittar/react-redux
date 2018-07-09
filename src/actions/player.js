export const PLAYITEM = 'PLAY_ITEM';

export const addToPlay = (url) => {
    return {
        type: PLAYITEM,
        url
    }
};
