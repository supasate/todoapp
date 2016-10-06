import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import { addTodo } from '../actions/todo'

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(TodoInput)
