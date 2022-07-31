import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskList } from "./Context";

function TaskCard({ id, title, desc, status }) {
  const { setShowModal, setTobeDeleted } = useContext(TaskList);
  const deleteTask = () => {
    setTobeDeleted(id);
    setShowModal(true);
  };
  return (
    <div className="task_card">
      <h4 id="task_title">{title}</h4>
      <p id="task_description">{desc}</p>
      <p id="task_status">Status: {status}</p>
      <div className="actions">
        <button>
          <Link to={`task/${id}`}>
            <i className="fa-solid fa-pencil"></i>
          </Link>
        </button>
        <button onClick={deleteTask}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
