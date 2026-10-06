import { createContext, useContext } from "react";

const todoContext = createContext({
    todo: [{
        id: 1,
        todo: "Wake Up early",
        isCompleted: true
    }],
    deleteTodo: (_id: number) => { },
    updateTodo: (_id: number, _todo: Todo) => { },
    addTodo: (_todo: Todo) => { },
    toggleComplete: (_id: number) => { }
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