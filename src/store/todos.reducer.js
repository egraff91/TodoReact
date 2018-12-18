import {ADD_TODO, RESET_TODOS} from './todos.action';

export const todoList = [
    {
        title: "Send a mail",
        isDone: false
      },
    {
      title: "Finish TP",
      isDone: false
    },
    {
      title: "go to WE",
      isDone: false
    }
];

export const initialState = {
    list : todoList,
}

export function todosReducer (state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            const todo = {
                id: state.list.length +1,
                title: action.title,
                isDone: false
            }

            return{
                ...state,
                list: [...state.list, todo]
            }
        case RESET_TODOS:
            return{
                ...state,
                list: []
            }

        default:
            return state;
    }
}