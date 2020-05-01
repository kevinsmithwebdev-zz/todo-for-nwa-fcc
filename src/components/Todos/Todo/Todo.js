import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../reducers/todosReducer';

const mapDispatchToProps = {
  dispatchDeleteTodo: deleteTodo,
};

const todoStyle = {
  backgroundColor: '#ddd',
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '10px',
  width: '200px',
};

const Todo = props => {
  return (
    <div style={ todoStyle } >
      <span style={ { flex: 1, padding: '10px' } } >
        { props.todo.task }
      </span>
      <span
        onClick={ () => props.dispatchDeleteTodo(props.todo._id) }
        style={ { color: 'red', padding: '10px' } }
      >
        X
      </span>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
