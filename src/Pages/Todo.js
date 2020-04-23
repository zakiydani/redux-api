import React, { useEffect } from "react";
import { getDataTodos } from "../Actions/todoActions";
import { connect } from "react-redux";

const Todo = (props) => {
  console.log("props", props);

  useEffect(() => {
    props.getDataTodos();
  }, []);

  return (
    <div>
      <h1>Todos API</h1>
      <ul>
        {props.todo.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (props) => {
  console.log("props", props);
  return {
    todo: props.todoReducers.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataTodos: () => dispatch(getDataTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
