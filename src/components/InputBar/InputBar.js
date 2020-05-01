import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../reducers/todosReducer';

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddTodo: task => dispatch(addTodo(task)),
  }
};

// const mapDispatchToProps = {
//   dispatchAddTodo: addTodo,
// };

const InputBar = props => {
  const [task, setTask] = useState('');

  const shouldDisableSubmit = task.length === 0;

  return (
    <div>
      <input
        value={ task }
        onChange={ e => setTask(e.target.value)}
      />
      <button
        onClick={ () => {
          props.dispatchAddTodo(task);
          setTask('');
        } }
        disabled={ shouldDisableSubmit }
        style={ { backgroundColor: shouldDisableSubmit ? 'lightgreen' : 'green', color: 'white' } }
      >
        Add
      </button>
    </div>
  );
};

const withRedux = connect(null, mapDispatchToProps);

export default withRedux(InputBar);

// export default connect(null, mapDispatchToProps)(InputBar);
