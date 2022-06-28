import { 
  // ADD_TODO, 
  // TOGGLE_TODO, 
  // DELETE_TODO, 
  EDIT_DB_TODO,
  GET_ALL_LATEST_TODOS_LOADING,
  GET_ALL_LATEST_TODOS_FAILURE } from "./actionType";

// const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload
//   };
// };

// const toggleTodo = (payload) => {
//   return {
//     type: TOGGLE_TODO,
//     payload
//   };
// };

// const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload
//   };
// };

const editDbTodo = (payload) => {
  return {
    type: EDIT_DB_TODO,
    payload
  };
};

export const getAllLatestTodosLoading = () => ({
  type: GET_ALL_LATEST_TODOS_LOADING
});

export const getAllLatestTodosFailure = () => ({
  type: GET_ALL_LATEST_TODOS_FAILURE
});

export { 
  // addTodo, 
  // toggleTodo, 
  // deleteTodo, 
  editDbTodo };
