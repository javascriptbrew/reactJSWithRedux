import React, { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from "../reducers/counterReducer";
import sagaActions from "../sagas/counterSaga/sagaActions";

function CounterRedux(props) {
  const count = useSelector((state) => state.counterStore.count);
  //   const countStore = useStore();
  const dispatch = useDispatch();
  const byAmount = 5;
  return (
    <div>
      <div>
        <b>Product:</b> {count}
      </div>
      <button
        onClick={() => dispatch({ type: sagaActions.DO_INCREMENT, payload: 1 })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: sagaActions.DO_DECREMENT, payload: 1 })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(resetCount(0))}>Rest Count</button>
      <button onClick={() => dispatch(incrementByAmount(byAmount))}>
        Increment By 5
      </button>
    </div>
  );
}

export default CounterRedux;
