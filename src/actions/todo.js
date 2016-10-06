import { ADD_TODO, TOGGLE_TODO } from './types'

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
})

const toggleTodo = text => ({
  type: TOGGLE_TODO,
  payload: {
    text,
  },
})

export {
  addTodo,
  toggleTodo,
}
