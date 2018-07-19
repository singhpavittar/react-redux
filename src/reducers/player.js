import {
    PLAYITEM
} from '../actions';

const videoId = (state = '', action) => {
    switch (action.type) {
        case PLAYITEM:
            return action.url || '';
        default:
            return state;
    }
}


export {
    videoId
};
