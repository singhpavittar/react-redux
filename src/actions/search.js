export const SEARCHTEXT = 'SEARCH_TEXT';
export const SEARCHLIST = 'SEARCH_LIST';

export const setSearchText = (search) => {
    return {
        type: SEARCHTEXT,
        search
    }
};

export const getSearchList = (data) => {
    return {
        type: SEARCHLIST,
        data
    }
};