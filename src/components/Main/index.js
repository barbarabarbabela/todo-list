import "./Main.css";
import Task from "../Task";
import Button from "../Button";
import Modal from "../Modal";
import { useEffect, useState } from "react";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //GET
    fetch("http://localhost:5000/tasks/")
      .then((response) => response.json())
      .then((json) => setTasks(json));
  }, []);

  const modalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  //POST
  function fetchTask(name, description, date, id) {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: description,
        date: date,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  return (
    <div className="Main">
      <header>
        <h1>to-do list</h1>
      </header>

      <Button name="Criar Tarefa" onPress={modalOpen} />

      {openModal ? (
        <Modal modalClose={closeModal} onSubmit={fetchTask} />
      ) : null}

      <div className="tasks">
        {tasks.map((_item, index) => (
          <Task
            key={index}
            name={tasks[index].name}
            description={tasks[index].description}
            date={tasks[index].date}
            id={tasks[index].id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
