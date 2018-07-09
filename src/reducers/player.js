import {
    PLAYITEM
} from '../actions';

const player = (state = '', action) => {
    switch (action.type) {
        case PLAYITEM:
            return action.url || '';
        default:
            return state;
    }

}


export {
    player
};
