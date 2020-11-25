const ADD_TODO = 'ADD_TODO'
export const addTodo = (message)=>({ // ({}) or {return({type:ADD_TODO})}  both are same 
    type: ADD_TODO,
    message, // or message: message 
    id:Math.random(),
});


const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id)=>({
    type: DELETE_TODO,
    id,
});

const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = (id)=>({
    type: UPDATE_TODO,
    id,
});