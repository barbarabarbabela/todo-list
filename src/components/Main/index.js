import "./Main.css";
import Task from "../Task";
import Button from "../Button";
import Modal from "../Modal";
import { useEffect, useState } from "react";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const modalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetchCard();
  }, []);

  async function fetchCard() {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((json) => setTasks(json));
  }

  function createTask(task) {
    task.name = "";
    task.description = "";
    task.date = "";

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const taskData = Object.values(tasks);

  return (
    <div className="Main">
      <header>
        <h1>to-do list</h1>
      </header>

      <Button name="Criar Tarefa" onPress={modalOpen} />
      {openModal ? (
        <Modal modalClose={closeModal} handleSubmit={createTask} />
      ) : null}
      <div className="tasks">
        {taskData.map((item, index) => (
          <Task
            key={index}
            name={tasks[index].name}
            description={tasks[index].description}
            date={tasks[index].date}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
