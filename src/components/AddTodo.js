import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form>
      <input ref={node => {
         input = node;
        }} />
        {' '}
        <button type="submit" onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = '';
          }
        }>
          Add Todo
        </button>
    </form>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;