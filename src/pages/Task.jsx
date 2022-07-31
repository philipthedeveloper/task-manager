import React, { useContext, useState, useEffect } from "react";
import "./Task.css";
import { Link } from "react-router-dom";
import { TaskList } from "../components/Context";
import { useParams, useNavigate } from "react-router-dom";

function Task() {
  const { taskID } = useParams();
  const navigate = useNavigate();
  const { tasks, dispatch } = useContext(TaskList);
  const [currentTask, setCurr] = useState(undefined);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("todo");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000);
    const newTask = {
      id,
      title: title.trim(),
      desc: desc.trim(),
      status,
    };
    dispatch({ type: "ADD", payload: newTask });
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateTask = {
      id: currentTask.id,
      title: title.trim(),
      desc: desc.trim(),
      status,
    };
    dispatch({ type: "UPDATE", payload: updateTask });
    navigate("/");
  };

  const handleStatus = (e) => {
    setStatus(e.target.id);
  };

  useEffect(() => {
    let currentTask;
    if (taskID) {
      currentTask = tasks.find((task) => task.id === Number(taskID));
      setCurr(currentTask);
      setTitle(currentTask.title);
      setDesc(currentTask.desc);
      setStatus(currentTask.status);
    }
  }, [taskID, tasks]);

  return (
    <div className="task_page">
      <div className="task_page_header">
        <Link to={"/"}>&lt;&lt;Go Back</Link>
        <h2>{currentTask ? "Update a Task" : "Add New Task"}</h2>
      </div>
      <form action="">
        <div className="form_group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter task title."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={40}
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter task description."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            maxLength={200}
            required
          ></textarea>
        </div>
        {currentTask && (
          <div className="form_group">
            <label htmlFor="status" id="status">
              Status:{" "}
            </label>
            <label className="status">
              <input
                type="radio"
                name="status"
                id="todo"
                value={"To do"}
                checked={status === "todo" && true}
                onChange={handleStatus}
              />{" "}
              To do
            </label>
            <label className="status">
              <input
                type="radio"
                name="status"
                id="completed"
                value={"Completed"}
                checked={status === "completed" && true}
                onChange={handleStatus}
              />{" "}
              Completed
            </label>
            <label className="status">
              <input
                type="radio"
                name="status"
                id="inprogress"
                value={"In Progress"}
                checked={status === "inprogress" && true}
                onChange={handleStatus}
              />{" "}
              In Progress{" "}
            </label>
          </div>
        )}

        {currentTask ? (
          <button type="submit" onClick={handleUpdate}>
            Update Task
          </button>
        ) : (
          <button type="submit" onClick={handleSubmit}>
            Save Task
          </button>
        )}
      </form>
    </div>
  );
}

export default Task;
