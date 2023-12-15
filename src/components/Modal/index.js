import "./Modal.css";
import Button from "../Button";
import "./Modal.css";
import { useState } from "react";
import TextField from "../TextField";

const Modal = ({ modalClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="Modal">
      <div className="modalContainer">
        <h2>Criar nova tarefa</h2>
        <div className="form">
          <form>
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
              <Button
                name="Enviar"
                onPress={() => {
                  if (name == "" || description == "" || date == "") {
                    alert("Por favor, insira um valor.");
                  } else {
                    onSubmit(name, description, date);
                  }
                }}
              />
              <Button name="Cancelar" onPress={modalClose} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
