import { combineReducers } from 'redux';

import {todo, name} from './counter';
import {searchstatus} from './header';

export default combineReducers({
    todo,
    name,
    searchstatus
})