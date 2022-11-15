import React, { useState, useEffect } from 'react';
import AddList from './addList';
import ListElement from './listContainer/listElement';

import './index.css';
const apiRoot = "https://todolist-ruslan.azurewebsites.net";


function BuildToDo() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch(`${apiRoot}/TodoList`)
            .then(res => res.json())
            .then(json => setLists(json))
    }, []);

    return (
        <div className='App'>
            <div className='top'>У списку задач: {lists.length} шт. </div>
            <ListElement lists={lists} setLists={setLists} />
            <AddList lists={lists} setLists={setLists} />
        </div>

    )

}


export default BuildToDo;