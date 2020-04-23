import React from "react";
import { withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        Todo API
      </button>

      <button
        onClick={() => {
          props.history.push("/mock");
        }}
      >
        Mock API
      </button>

      <button
        onClick={() => {
          props.history.push("/hooks");
        }}
      >
        Hooks
      </button>
    </div>
  );
}

export default withRouter(Navbar);
