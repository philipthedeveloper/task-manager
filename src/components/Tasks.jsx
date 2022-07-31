import React, { useContext } from "react";
import "./Tasks.css";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import { TaskList } from "./Context";

function Tasks() {
  const { tasks, searchList } = useContext(TaskList);
  return (
    <main>
      <div className="header">
        <h3>Tasks</h3>
        <Link to="task">+ Add new task</Link>
      </div>
      <div className="task_container">
        {searchList.length > 0
          ? searchList.map((task) => {
              return <TaskCard {...task} key={task.id} />;
            })
          : tasks.map((task) => {
              return <TaskCard {...task} key={task.id} />;
            })}
      </div>
    </main>
  );
}

export default Tasks;
