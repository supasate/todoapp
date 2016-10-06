import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleStatus }) => (
  <ul>
    { todos.map(todo => (
      <TodoItem
        key={todo.text}
        text={todo.text}
        complete={todo.complete}
        toggleStatus={toggleStatus}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleStatus: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
