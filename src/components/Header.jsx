import React, { useState, useContext } from "react";
import "./Header.css";
import { TaskList } from "./Context";

function Header() {
  const [searchText, setSearchText] = useState("");
  const { filterList } = useContext(TaskList);
  const handleInput = (e) => {
    setSearchText(e.target.value);
    filterList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(searchText);
  };

  return (
    <header>
      <h2>Task Manager</h2>
      <form action="">
        <div className="form_group">
          <input
            type="text"
            name="search"
            id="search"
            value={searchText}
            placeholder="Search Task"
            onChange={(e) => handleInput(e)}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </header>
  );
}

export default Header;
