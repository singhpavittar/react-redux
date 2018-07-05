import { combineReducers } from 'redux';

import {todo, name} from './counter';
import {searchstatus} from './header';
import {searchtext, searchlist} from './search';

export default combineReducers({
    todo,
    name,
    searchstatus,
    searchtext,
    searchlist
})