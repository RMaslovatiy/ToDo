import React, { useState, useCallback } from "react";
import ItemContainer from "../itemContainer/itemContainer"
import AddItem from "./addItem";
import AddItemField from "../itemContainer/addItemField";
import EditList from "./editList";
import DeleteList from "./deleteList";
import { addItemRequest } from "../requests"




function ListElement({ lists, setLists }) {

  const [visible, setVisible] = useState(false)
  const [idAddButton, setIdAddButton] = useState()

  const editList = (list) => {
    console.log(list)

  }


  const showItemInput = (id) => {
    setVisible(visible === true ? false : true)
    setIdAddButton(id)
  }

  const addItem = (id, event, value, resetValue) => {
    if (event.key === 'Enter') {
      let data = { name: value }
      let targetList = lists.find(list => list.id === id);
      addItemRequest(data, id)
        .then(response => {
          targetList.items.push(response)
          setLists(lists.map(list => {
            if (list.id === targetList.id) {
              return targetList;
            }
            return list;
          }))
        })
      resetValue()
      setVisible(false)
    }
  }


  return (
    lists.map((list, key) =>
      <div
        key={list.id}
        className="list-container"
      >
        <AddItem
          id={list.id}
          onClick={showItemInput}
        />
        <div className="list" >
          {/* {visible ? 
          <input
            className="edit-list"
            value={list.title}></input> */}
          {list.title}
        </div>
        <div className="change-list-container">
          <EditList
            list={list}
            onClick={editList}
          />
          <DeleteList
            id={key}
            list={list}
            lists={lists}
            setLists={setLists}
          />
        </div>
        <ItemContainer
          list={list}
          lists={lists}
          setLists={setLists}
        />
        <AddItemField
          id={list.id}
          list={list}
          onKeyDown={addItem}
          visibility={visible}
          idAddButton={idAddButton}
        />
      </div>
    )
  )
}

export default ListElement
