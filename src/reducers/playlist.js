import {
    ADDITEM
} from '../actions';

const playlist = (state = [], action) => {
    switch (action.type) {
        case ADDITEM:
            return [...state, [{
                data: action.data
            }]];
        default:
            return state;
    }

}


export {
    playlist
};