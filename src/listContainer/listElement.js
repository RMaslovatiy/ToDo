import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemContainer from "../itemContainer/itemContainer";
import AddItem from "./addItem";
import { getTodoLists, postItem, delItem } from "../redux/reducers/lists/asyncThunks";
import AddItemField from "../itemContainer/addItemField";
import DeleteList from "./deleteList";

function ListElement() {
  const dispatch = useDispatch();
  const [visibleItemInput, setVisibleItemInput] = useState(false);
  const [idAddButton, setIdAddButton] = useState();
  const lists = useSelector((state) => state.lists.data);

  const showItemInput = (id) => {
    setVisibleItemInput((visibleItemInput) => !visibleItemInput);
    setIdAddButton(id);
  };

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  const addItem = (id, event, value, resetValue) => {
    if (event.key === "Enter") {
      const data = {
        name: { name: value },
        id,
      };

      dispatch(postItem(data));
      resetValue();
      setVisibleItemInput(false);
    }
  };

  return lists.map((list) => (
    <div key={list.id} className="list-container">
      <AddItem id={list.id} onClick={showItemInput} />
      <div className="list">{list.title}</div>
      <div className="change-list-container">
        <DeleteList id={list.id} />
      </div>
      <ItemContainer
        list={list}
        onDelete={(id) => {
          const data = {
            list: list,
            itemId: id,
          };
          dispatch(delItem(data));
        }}
      />

      <AddItemField
        id={list.id}
        list={list}
        onKeyDown={addItem}
        visibility={visibleItemInput}
        idAddButton={idAddButton}
      />
    </div>
  ));
}

export default ListElement;
