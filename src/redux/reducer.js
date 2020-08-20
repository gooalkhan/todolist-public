import { maxBy, findIndex } from 'lodash';

const initTodo = {
    todos: [
        
            {title: "test1",
            body: "test",
            id: 1},
            {title: "test2",
            body: "test",
            id: 2},
            {title: "test3",
            body: "test",
            id: 3},
            {title: "test4",
            body: "test",
            id: 4},
        
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
            //todos = state.todos.filter((item) => (item.id !== action.id))
            todos = [...state.todos]
            const modifiedIndex = findIndex(state.todos, ['id', action.id])
            todos.splice(modifiedIndex, 1, { ...action.todo, id: action.id})
            // todos = sortBy(todos, 'id')
            console.log("modify", todos)
            return ({
                ...state,
                todos
            })

        case "DND_TODO":
            const dragIndex = findIndex(state.todos, ['id', action.dragId])
            let dropIndex = findIndex(state.todos, ['id', action.dropId])
            const dragItem = state.todos.filter((item) => (item.id === action.dragId))[0]
            todos = state.todos.filter((item) => (item.id !== action.dragId))
            console.log(action.dragId, dragItem, "to be pushed")
            console.log(action.dropId, dropIndex, "to be inserted")
            if (dragIndex > dropIndex) {
            todos.splice(dropIndex, 0, dragItem)
            } else if (dragIndex < dropIndex && dropIndex === todos.length) {
            todos.push(dragItem)
            } else if (dragIndex < dropIndex && dropIndex !== todos.length) {
            todos.splice(++dropIndex, 0, dragItem)
            }
            console.log(todos)
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