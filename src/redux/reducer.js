import { maxBy } from 'lodash';

const initTodo = {
    todos: [
        
            // title: "test",
            // body: "test",
            // id: 1
        
    ]
}

export const appReducer = (state = initTodo, action) => {
    let todos;

    switch (action.type) {

        case "ADD_TODO":
            let maxId;
            state.todos.length === 0 ? maxId = 0 :
                maxId = maxBy(state.todos, "id").id
            todos = [...state.todos]
            todos.push({ ...action.todo, id: maxId + 1 })
            console.log("add", todos)
            return ({
                ...state,
                todos
            })

        case "MODIFY_TODO":
            todos = state.todos.filter((item) => (item.id !== action.id))
            todos.push({ ...action.todo, id: action.id})
            console.log("modify", todos)
            return ({
                ...state,
                todos
            })

        case "DELETE_TODO":
            todos = state.todos.filter((item) => (item.id !== action.id))
            console.log("delete", todos)
            return ({
                ...state,
                todos
            })

        default:
            return state

    }
}