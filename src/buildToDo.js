import AddList from "./addList";
import ListElement from "./listContainer/listElement";
import { useSelector } from 'react-redux'
import "./index.css";

function BuildToDo() {
  const length = useSelector(state => state.lists.data.length);

  return (
    <div className="App">
      <div className="top">У списку задач: {length} шт. </div>
      <ListElement />
      <AddList />
    </div>
  );
}

export default BuildToDo;
