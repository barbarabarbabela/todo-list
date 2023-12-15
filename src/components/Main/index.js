import "./Main.css";
import Task from "../Task";
import Button from "../Button";
import Modal from "../Modal";
import { useEffect, useState } from "react";

const Main = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const modalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  console.log(props);

  useEffect(() => {
    fetchCard();
  }, []);

  //GET
  async function fetchCard() {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((json) => setTasks(json));
  }

  //POST
  function fetchTask(name, description, date) {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        date: date,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  //DELETE
  function deleteTask() {
    fetch("http://localhost:5000/tasks", {
      method: "DELETE",
    });
  }

  const taskData = Object.values(tasks);

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
