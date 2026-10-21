import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    Todos: [{ id: "1", text: "hello World" }]
}

export const MyTodo = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let new_todo = {
                id: nanoid(),
                text: action.payload
            }
            state.Todos.push(new_todo)
        },
        removeTodo: (state, action) => {
            state.Todos = state.Todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.Todos.map(todo => {
                if (todo.id == action.payload.id) {
                    todo.text = action.payload.text
                }
            })
        }
    }
})

export const { addTodo, removeTodo ,updateTodo} = MyTodo.actions
export default MyTodo.reducer;