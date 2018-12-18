export const ADD_TODO = "ADD_TODO";
export const RESET_TODOS = "RESET_TEST";

export function addTodo(title){
    return {
        type: ADD_TODO,
        title
    }
}

export function resetTodos(){
    return {
        type: RESET_TODOS
    }
}