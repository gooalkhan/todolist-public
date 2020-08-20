export const modifyTodo = (id, todo) => {
    
    return {
        type: "MODIFY_TODO",
        id, 
        todo}
}

export const addTodo = (todo) => {
    
    return {
        type: "ADD_TODO",
        todo}
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const dndTodo = (dragId, dropId) => {
    return {
        type: "DND_TODO", 
        dragId,
        dropId
    }
}