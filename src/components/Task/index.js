import "./Task.css";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Task = (props) => {
  //DELETE
  function deleteTask(id) {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => console.log(id));
  }

  return (
    <div className="Task">
      <div className="card">
        <div className="img">
          <img src={Edit}></img>
          <img
            src={Delete}
            onClick={() => {
              deleteTask(props.id);
              window.location.reload();
            }}
          ></img>
        </div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Data: {props.date}</p>
      </div>
    </div>
  );
};

export default Task;
