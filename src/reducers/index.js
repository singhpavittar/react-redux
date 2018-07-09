import { combineReducers } from 'redux';

import {playlist} from './playlist';
import {player} from './player';
import {searchstatus} from './header';
import {searchtext, searchlist} from './search';

export default combineReducers({
    playlist,
    searchstatus,
    searchtext,
    searchlist,
    player
})