import { connect } from 'react-redux';
import TodoList from './TodoList';
import { getVisibleTodos } from '../actions/getVisibleTodos';
import { toggleTodo } from '../actions/toggleTodo';

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(
        toggleTodo(id)
      )
    }
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;