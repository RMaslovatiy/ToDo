import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemContainer from "../itemContainer/itemContainer";
import AddItem from "./addItem";
import { postItem, delItem } from "../redux/reducers/lists/asyncThunks";
import AddItemField from "../itemContainer/addItemField";
import DeleteList from "./deleteList";
import ListElement from "./listElement/listElement";

function ListContainer() {
  const dispatch = useDispatch();
  const [visibleItemInput, setVisibleItemInput] = useState(false);
  const [idAddButton, setIdAddButton] = useState();
  const lists = useSelector((state) => state.lists.data);

  const showItemInput = (id) => {
    setVisibleItemInput((visibleItemInput) => !visibleItemInput);
    setIdAddButton(id);
  };

  const handleEnterForAddItem = (event, data, resetValue) => {
    if (event.key === "Enter") {
      addItem(data);
      resetValue();
    }
  };

  const addItem = (data) => {
    dispatch(postItem(data));
    setVisibleItemInput(false);
  };

  return lists.map((list) => (

    <div key={list.id} className="list-container">
      <AddItem id={list.id} onClick={showItemInput} />

      <ListElement list={list} />

      <DeleteList id={list.id} />

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
        onKeyDown={handleEnterForAddItem}
        visibility={visibleItemInput}
        idAddButton={idAddButton}
        addItem={addItem}
      />

    </div>
  ));
}

export default ListContainer;
