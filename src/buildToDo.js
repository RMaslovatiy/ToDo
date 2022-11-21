import React, { useState, useEffect } from 'react';
import AddList from './addList';
import ListElement from './listContainer/listElement';
import { useSelector } from 'react-redux/es/exports';
import './index.css';

const apiRoot = "https://todolist-ruslan.azurewebsites.net";


function BuildToDo() {

    // useEffect(() => {
    //     fetch(`${apiRoot}/TodoList`)
    //         .then(res => res.json())
    //         .then(json => setLists(json))
    // }, []);

    return (
        <div className='App'>
            <div className='top'>У списку задач:  шт. </div>
            <ListElement />
            {/* <AddList lists={lists} /> */}
        </div>

    )

}


export default BuildToDo;