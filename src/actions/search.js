export const SEARCHTEXT = 'SEARCH_TEXT';

export const searchText = (search) => {
    return {
        type: SEARCHTEXT,
        search
    }
};