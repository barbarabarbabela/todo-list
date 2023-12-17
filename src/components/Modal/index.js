import "./Modal.css";
import Button from "../Button";
import "./Modal.css";
import { useState } from "react";
import TextField from "../TextField";
import Label from "../Label";

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
            <Label name="Nome da Tarefa" />
            <TextField
              required={true}
              placeholder="Tarefa"
              type="text"
              handleChange={(value) => setName(value)}
            />
            <Label name="Descrição:" />
            <TextField
              required={true}
              placeholder="Descrição"
              type="text"
              handleChange={(value) => setDescription(value)}
            />
            <Label name="Data de finalização: " />
            <TextField
              required={true}
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
