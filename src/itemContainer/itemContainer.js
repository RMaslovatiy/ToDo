import ItemElement from "./itemElement";
import DeleteItemButton from "./deleteItemButton";
import React, { useState, useCallback } from "react";
import { deleteItemRequest } from "../requests";


const ItemContainer = ({ list }) => {

    const [items, setItems] = useState(list?.items || []);

    const onDelete = useCallback((id) => {
        deleteItemRequest(list.id, id)
            .then(response => {
                if (response.status === 204) {
                    setItems(items.filter(item => item.id !== id))
                }
            })
    }, [items, setItems, list]);
    if (items && items.length > 0) {
        return (
            <div className="items-container">

                {items.map((item, key) => (
                    <div key={key} className="item-el">
                        <ItemElement item={item} list={list} />
                        <DeleteItemButton
                            id={item.id}
                            onClick={onDelete}
                        />

                    </div>
                ))}


            </div>
        )
    }



}

export default ItemContainer