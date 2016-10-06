import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import rootReducer from './reducers'

const initialState = {
  todos: [
    { text: 'Drink coffe', complete: false },
    { text: 'Feed cat', complete: true },
  ],
}

const store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-root'))
