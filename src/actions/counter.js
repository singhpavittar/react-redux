export const ADDTODO = 'ADD_TODO';
export const ADDNAME = 'ADD_NAME';
export const REMOVETODO = 'REMOVE_TODO';
export const DISABLETODO = 'HIDE_TODO';

export const addTodoAction = (text) => {
    return {
        type: ADDTODO,
        text
    }
};

export const addName = (name) => {
    return {
        type: ADDNAME,
        name
    }
};