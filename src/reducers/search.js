import {
    SEARCHLIST,
    SEARCHTEXT
} from '../actions';

const searchtext = (state = '', action) => {
    switch(action.type){
        case SEARCHTEXT:
        return action.search;
        default:
        return state;
    }
}

const searchlist = (state = [], action) => {
    switch(action.type){
        case SEARCHLIST:
        return action.data;
        default:
        return state;
    }
}


export {searchtext, searchlist};