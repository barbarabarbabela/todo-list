import "./Task.css";

const Task = (props) => {
  return (
    <div className="Task">
      <div className="card">
        <h3>Tarefa: {props.name}</h3>
        <p>Descrição: {props.description}</p>
        <p>Data: {props.date}</p>
      </div>
    </div>
  );
};

export default Task;
