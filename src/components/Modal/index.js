import "./Modal.css";
import Button from "../Button";
import "./Modal.css";
import { useState } from "react";
import TextField from "../TextField";

const Modal = ({ modalClose, submitForm }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState({ name: "", description: "", date: "" });

  const submit = (e) => {
    e.preventDefault();
    console.log(name, description, date);
    setTask({ ...task, name: name, description: description, date: date });
    console.log(task);
  };

  return (
    <div className="Modal">
      <div className="modalContainer">
        <h2>Criar nova tarefa</h2>
        <div className="form">
          <form onSubmit={submit}>
            <label>Nome da tarefa: </label>
            <TextField
              required={true}
              placeholder="Tarefa"
              value={name}
              type="text"
              handleChange={(value) => setName(value)}
            />
            <label>Descrição da tarefa:</label>
            <TextField
              required={true}
              placeholder="Descrição"
              value={description}
              type="text"
              handleChange={(value) => setDescription(value)}
            />
            <label>Data de finalização:</label>
            <TextField
              required={true}
              value={date}
              type="date"
              handleChange={(value) => setDate(value)}
            />
            <div className="button">
              <Button name="Enviar" onPress={submit} />
              <Button name="Cancelar" onPress={modalClose} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
