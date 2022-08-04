import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectCount } from './selector';
import { addCount, subtractCount, resetCount } from './action';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';

function CounterApp(props) {
  const { onAdd, onSubtract, onReset, makeCount } = props;
  console.log(props);

  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <input type="text" value={Number(makeCount)} />

      <button
        onClick={() => {
          onAdd();
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          onSubtract();
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          onReset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

const mapStatetoProps = createStructuredSelector({
  makeCount: makeSelectCount(),
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(addCount()),
    onSubtract: () => dispatch(subtractCount()),
    onReset: () => dispatch(resetCount()),
  };
};

const withConnect = connect(mapStatetoProps, mapDispatchToProps);

export default compose(withConnect)(CounterApp);
