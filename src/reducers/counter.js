import {
    ADDTODO,
    REMOVETODO,
    DISABLETODO,
    ADDNAME
} from '../actions';

 const todo = (state = [], action) => {
    switch(action.type){
        case ADDTODO:
        return [...state, action.text];
        default:
        return state;
    }

}

const removeTodo = (state = [], action) => {
    switch(action.type){
        case REMOVETODO:
        return Object.assign([], state.splice(action.index, 1));
        default:
        return state;
    }
}

const name = (state = '', action) => {
    switch(action.type){
        case ADDNAME:
        return action.name;
        default:
        return state;
    }
}


export {todo, name};