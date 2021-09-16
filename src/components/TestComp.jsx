import React from "react";
import { useSelector, useStore } from "react-redux";

function TestComp(props) {
  const count = useSelector((state) => state.counterStore.count);
  const countStore = useStore();
  const countFromStore = countStore.getState();
  return (
    <div>
      <div>
        <b>Total ProductCart Count: </b>
        {count}
      </div>
      <div>
        <b>Product Count form Store: </b>
        {countFromStore.counterStore.count}
      </div>
    </div>
  );
}

export default TestComp;
