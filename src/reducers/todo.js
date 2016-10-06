import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        text: action.payload.text,
        complete: false,
      }
      return [
        newTodo,
        ...state,
      ]
    }
    case TOGGLE_TODO: {
      return state.map(todo => (
         action.payload.text === todo.text ?
          { text: todo.text, complete: !todo.complete } : todo
      ))
    }
    default: {
      return state
    }
  }
}

export default todoReducer
