import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="row">
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        
        <div className="form-group">
          <input 
            className="form-control"
            placeholder="What needs to be done?"
            ref={node => {
              input = node;
            }} />
          
        </div>
      </form>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;