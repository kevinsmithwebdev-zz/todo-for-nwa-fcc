import React from 'react';
import { connect } from 'react-redux';
import { resetTodos } from '../../reducers/todosReducer';

const mapStateToProps = state => ({
  shouldDisableReset: state.todos.list.length === 0,
});

const mapDispatchToProps = {
  dispatchResetTodos: resetTodos,
};

const ResetButton = ({ dispatchResetTodos, shouldDisableReset }) => {
  const style = {
    padding: '10px',
    margin: shouldDisableReset ? '68px 10px' : '10px',
    color: 'white',
    backgroundColor: shouldDisableReset ? 'pink' : 'red',
  }
  return (
    <button
      disabled={ shouldDisableReset }
      onClick={ dispatchResetTodos }
      style={ style }
    >
      Reset
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
