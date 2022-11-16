import ItemElement from "./itemElement";
import DeleteItemButton from "./deleteItemButton";
import React, { useState, useCallback, useEffect } from "react";

const ItemContainer = ({ list, onDelete }) => {
  const handleDelete = useCallback(
    (id) => {
      onDelete(id);
    },
    [onDelete]
  );

  if (list.items && list.items.length > 0) {
    return (
      <div className="items-container">
        {list.items.map((item, key) => (
          <div key={key} className="item-el">
            <ItemElement item={item} list={list} />
            <DeleteItemButton id={item.id} onClick={handleDelete} />
          </div>
        ))}
      </div>
    );
  }
};

export default ItemContainer;
