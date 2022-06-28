import { 
  // ADD_TODO, 
  // DELETE_TODO, 
  // TOGGLE_TODO, 
  EDIT_DB_TODO,
  GET_ALL_LATEST_TODOS_LOADING,
  GET_ALL_LATEST_TODOS_FAILURE } from "./actionType";

const initailState = {
  todos : [],
  isLoading : false,
  isError : false
};

const reducer = (state = initailState, { type, payload }) => {
  switch (type) {
    // case ADD_TODO: {
    //   return {
    //     ...state,
    //     todos: [...state.todos, payload],
    //   };
    // }
    // case TOGGLE_TODO: {
    //   return {
    //     ...state,
    //     todos: state.todos.map((item) =>
    //       item.id === payload ? { ...item, status: !item.status } : item
    //     )
    //   };
    // }
    // case DELETE_TODO: {
    //   return {
    //     ...state,
    //     todos: state.todos.filter((item) => (item.id !== payload ? item : null))
    //   };
    // }s
    case EDIT_DB_TODO: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_ALL_LATEST_TODOS_FAILURE: {
      return {
          ...state,
          isLoading : false,
          isError : true,
          todos : []
      };
  }
  case GET_ALL_LATEST_TODOS_LOADING: {
    return {
        ...state,
        isLoading : true,
        isError : false,
        todos : []
    };
}
    default: {
      return state;
    }
  }
};

export { reducer };
