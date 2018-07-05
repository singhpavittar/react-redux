import {
    ENABLESEARCH
} from '../actions';

const searchstatus = (state = false, action) => {
    switch(action.type){
        case ENABLESEARCH:
        return action.search;
        default:
        return state;
    }
}


export {searchstatus};