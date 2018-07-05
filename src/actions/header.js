export const ENABLESEARCH = 'ENABLE_SEARCH';

export const enableSearch = (search) => {
    return {
        type: ENABLESEARCH,
        search
    }
};