import { useState, useCallback } from "react";
import ListTitleInput from "./listTitleInput";
import ListTitle from "./listTitle";
import EditListTitle from "./editListTitle";


function ListElement({ list }) {
    const [editList, setEditList] = useState(false);

    const hideListTitleInput = () => {
        setEditList(false);
    };

    const showEditListInput = () => {
        setEditList((editList) => !editList);

    };

    return (
        <div className="list-element">
            <div className="list-element">
                {!editList
                    ? <ListTitle list={list} />
                    : <ListTitleInput list={list} hideListTitleInput={hideListTitleInput} />}
            </div>

            <div className="change-list-container">
                {!editList
                    ? <EditListTitle onClick={showEditListInput} />
                    : <p />}
            </div>
        </div>
    )
}

export default ListElement

