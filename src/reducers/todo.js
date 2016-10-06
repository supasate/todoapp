import { ADD_TODO } from '../actions/types'

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        text: action.payload.text,
      }
      return [
        newTodo,
        ...state,
      ]
    }
    default: {
      return state
    }
  }
}

export default todoReducer
