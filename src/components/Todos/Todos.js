import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo/Todo';

const mapStateToProps = state => ({
  todos: state.todos.list,
});

const Todos = props => (
  <div>
    { props.todos.map(todo => <Todo key={todo._id } todo={ todo } />) }
  </div>
);

export default connect(mapStateToProps)(Todos);
