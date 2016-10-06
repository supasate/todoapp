import React, { PropTypes } from 'react'

const TodoItem = ({ text, complete, toggleStatus }) => (
  <li onClick={() => { toggleStatus(text) }} className={complete ? 'complete' : ''}>{text}</li> // eslint-disable-line jsx-a11y/no-static-element-interactions
)

TodoItem.propTypes = {
  complete: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleStatus: PropTypes.func.isRequired,
}
export default TodoItem
