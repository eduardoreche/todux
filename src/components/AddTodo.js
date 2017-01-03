import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form className="form-inline">
      <div className="form-group">
        <input 
          className="form-control"
          ref={node => {
            input = node;
          }} />
        <button type="submit" 
          className="btn btn-default"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = '';
          }
        }>
          Add
        </button>
      </div>
    </form>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;