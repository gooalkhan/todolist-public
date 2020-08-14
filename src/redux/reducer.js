import {maxBy} from 'lodash';

const initTodo = {
    todos: [
        {
            // title: "test",
            // body: "test",
            // id: 1
        }
    ]
}

export const appReducer = (state = initTodo, action) => {
    console.log(state)
    let todos;

    switch (action.type) {

        case "ADD_TODO":
            const maxId = maxBy(state.todos, "id").id
            todos = [...state.todos]
            todos.push({...action.todo, id: maxId + 1})
            return ({
                ...state,
                todos
            })

        case "MODIFY_TODO":
            todos = state.todos.filter((item) => (item.id !== action.id))
            todos.push({...action.todo, id: action.id})
            return ({
                ...state,
                todos
            })

        case "DELETE_TODO":
            todos = state.todos.filter((item) => (item.id !== action.id))
            return ({
                ...state,
                todos
            })

        default:
            return state

    }
}