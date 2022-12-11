import AddList from "./addList";
import ListContainer from "./listContainer/listContainer";
import { useSelector } from 'react-redux'
import "./index.css";

function BuildToDo() {
  const length = useSelector(state => state.lists.data.length);

  return (
    <div className="App">
      <div className="top">У списку задач: {length} шт. </div>
      <ListContainer />
      <AddList />
    </div>
  );
}

export default BuildToDo;
