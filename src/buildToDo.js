import React, { useState, useEffect } from "react";
import AddList from "./addList";
import ListElement from "./listContainer/listElement";

import "./index.css";

function BuildToDo() {
  return (
    <div className="App">
      <div className="top">У списку задач: шт. </div>
      <ListElement />
      {/* <AddList lists={lists} /> */}
    </div>
  );
}

export default BuildToDo;
