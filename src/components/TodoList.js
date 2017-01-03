import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <div>
    <div className="row">&nbsp;</div>
    <div className="row">
      <div className="list-group">
        {todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        )}
      </div>
    </div>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;