import React, { useEffect, useState } from "react";

import "../styles/ToDoList.css";

import CreateTask from "./Modals/CreateTask";
import Card from "./Card";
import Search from "./Search";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button
          className="btn btn-primary mt-2 mb-2"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
        <Search searchText={searchText} handleSearch={handleSearch} />
      </div>
      <div className="task-container">
        {taskList
          .filter((obj) =>
            obj["Name"].toLowerCase().includes(searchText.toLowerCase())
          )
          .map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} save={saveTask} />
    </>
  );
};

export default ToDoList;
