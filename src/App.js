import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import TodoApp from './components/TodoApp';
import todoStore from './stores/todoStore';

let store = createStore(todoStore);

class App extends Component {
  render() {
    return (
      <Provider store={todoStore}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
