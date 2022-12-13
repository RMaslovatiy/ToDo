import AddList from "./addList";
import ListContainer from "./listContainer/listContainer";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import "./index.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { getTodoLists } from "./redux/reducers/lists/asyncThunks";


function BuildToDo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  const length = useSelector(state => state.lists.data.length);
  const isLoading = useSelector(state => state.lists.isLoading);

  return (
    !isLoading
      ? <div className="App">
        <div className="top">У списку задач: {length} шт. </div>
        <ListContainer />
        <AddList />
      </div>
      : <div className="App">
        <div className="top">
          <PropagateLoader
            color="#363bd6"
          />
        </div>
      </div>
  );
}

export default BuildToDo;
