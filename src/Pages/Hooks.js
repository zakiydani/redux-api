import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNum, minusNum } from "../Actions/hooksActions";

function Hooks() {
  const num = useSelector((state) => state.hooksReducers.num);
  const dispatchHooks = useDispatch();
  console.log("props", num);
  return (
    <div>
      <h1>Data from Mock API</h1>
      <button onClick={() => dispatchHooks(addNum())}>Add</button>
      {num}
      <button onClick={() => dispatchHooks(minusNum())}>Min</button>
    </div>
  );
}

export default Hooks;
