import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todo'

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  toggleStatus: text => dispatch(toggleTodo(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
