import { createContext, useContext } from "react";

const todoContext = createContext({
    todo: [{
        id: 1,
        todo: "Wake Up early",
        isCompleted: true
    }],
    deleteTodo: (id: number) => { },
    updateTodo: (id: number, todo: Todo) => { },
    addTodo: (todo: Todo) => { },
    toggleComplete: (id: number) => { }
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}

export default interface Todo {
    id: number,
    todo: string,
    isCompleted: boolean
}