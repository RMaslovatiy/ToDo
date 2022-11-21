import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemContainer from "../itemContainer/itemContainer";
import AddItem from "./addItem";
import { getTodoLists } from "../redux/reducers/lists/asyncThunks";
import AddItemField from "../itemContainer/addItemField";
import DeleteList from "./deleteList";
import { addItemRequest } from "../requests";
import { deleteItemRequest } from "../requests";

function ListElement() {
  const [visible, setVisible] = useState(false);
  const [idAddButton, setIdAddButton] = useState();
  const lists = useSelector((state) => state.lists.data);
  const showItemInput = (id) => {
    setVisible((visible) => !visible);
    setIdAddButton(id);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  const addItem = (id, event, value, resetValue) => {
    if (event.key === "Enter") {
      let data = { name: value };
      let targetList = lists.find((list) => list.id === id);
      dispatch(addItemRequest(data, id));
      addItemRequest(data, id).then((response) => {
        targetList.items.push(response);
        // setLists(
        //   lists.map((list) => {
        //     if (list.id === targetList.id) {
        //       return {
        //         ...targetList,
        //         items: [...targetList.items],
        //       };
        //     }
        //     return {
        //       ...list,
        //       items: [...list.items],
        //     };
        //   })
        // );
      });
      resetValue();
      setVisible(false);
    }
  };

  return lists.map((list, key) => (
    <div key={list.id} className="list-container">
      <AddItem id={list.id} onClick={showItemInput} />
      <div className="list">{list.title}</div>
      <div className="change-list-container">
        <DeleteList id={key} list={list} lists={lists} />
      </div>
      <ItemContainer
        list={list}
        onDelete={(id) => {
          deleteItemRequest(list.id, id).then((response) => {
            if (response.status === 204) {
              // setLists(
              //   lists.map((innerList) => {
              //     if (list.id === innerList.id) {
              //       return {
              //         ...list,
              //         items: list.items.filter((item) => item.id !== id),
              //       };
              //     }
              //     return innerList;
              //   })
              // );
            }
          });
        }}
      />
      <AddItemField
        id={list.id}
        list={list}
        onKeyDown={addItem}
        visibility={visible}
        idAddButton={idAddButton}
      />
    </div>
  ));
}

export default ListElement;
