import React, { useState, useEffect } from "react";
import { getDataApi, postDataApi, deleteDataApi } from "../Actions/mockActions";
import { connect } from "react-redux";

function Mock(props) {
  console.log("props", props);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleDelete = (id) => {
    props.deleteDataApi(id);
  };

  useEffect(() => {
    props.getDataApi();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
    };
    props.postDataApi(obj);
  };
  return (
    <div>
      <h1>Mock API</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      {props.name.map((item, index) => (
        <div key={index}>
          <li>{item.name}</li>
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("INI STATE PROPS", props);
  return {
    name: props.mockReducers.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataApi: () => dispatch(getDataApi()),

    postDataApi: (obj) => dispatch(postDataApi(obj)),

    deleteDataApi: (id) => dispatch(deleteDataApi(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mock);
