import React, { useReducer, useState } from "react";

const TaskList = React.createContext();
const handler = (state, action) => {
  const type = action.type;
  switch (type) {
    case "ADD":
      const task = [...state];
      task.push(action.payload);
      return task;
    case "DELETE":
      const oldTask = [...state];
      const afterDel = oldTask.filter(
        (task) => task.id !== Number(action.payload.id)
      );
      return afterDel;
    case "UPDATE":
      const oldState = [...state];
      const currentTask = oldState.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
      return currentTask;
    default:
      break;
  }
};

function Context({ children }) {
  const [tasks, dispatch] = useReducer(handler, []);
  const [searchList, setSeachList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tobeDeleted, setTobeDeleted] = useState("");

  const filterList = (searchText) => {
    const searchs = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSeachList(searchs);
  };
  return (
    <TaskList.Provider
      value={{
        tasks,
        dispatch,
        filterList,
        searchList,
        showModal,
        setShowModal,
        tobeDeleted,
        setTobeDeleted,
      }}
    >
      {children}
    </TaskList.Provider>
  );
}

export default Context;
export { TaskList };
