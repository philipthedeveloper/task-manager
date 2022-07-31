import React, { useContext } from "react";
import { TaskList } from "./Context";
import "./Modal.css";

function Modal({ action }) {
  const { dispatch, tobeDeleted } = useContext(TaskList);

  return (
    <div className="big_modal_container">
      <div className="modal_container">
        <p>Are you sure you want to delete this task?</p>
        <div className="modal_actions">
          <button
            onClick={() => {
              dispatch({ type: "DELETE", payload: { id: tobeDeleted } });
              action(false);
            }}
          >
            Yes
          </button>
          <button onClick={() => action(false)}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
