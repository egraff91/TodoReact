import React from 'react';


const todosList= [
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
]


export const TodoContext = React.createContext({
    todosList: todosList,
    createContext: () => {}
});