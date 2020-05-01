// actions

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const RESET_TODOS = 'RESET_TODOS';

// action creators

export const addTodo = task => ({ type: ADD_TODO, payload: { task } });
export const deleteTodo = id => ({ type: DELETE_TODO, payload: { id } });
export const resetTodos = () => ({ type: RESET_TODOS });

// reducer

const initialState = {
  list: [],
  nextId: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        list: [...state.list, { task: action.payload.task, _id: state.nextId }],
        nextId: state.nextId + 1,
      }

    case DELETE_TODO:
      return {
        list: state.list.filter(todo => todo._id !== action.payload.id),
      }

    case RESET_TODOS:
      return initialState;

    default:
      return state;
  }
};
