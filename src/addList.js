import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { postList } from "./redux/reducers/lists/asyncThunks";

const AddList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    function handleEnter(event) {
        if (event.key === 'Enter') addTask()
    };
    const addTask = () => {
        dispatch(postList(value));
        setValue('');
    };

    return (
        <div>
            <input
                className='list-input'
                onKeyDown={handleEnter}
                placeholder="Введіть задачу"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
            </input>
            <button onClick={addTask}>OK</button>
        </div>
    )
}

export default AddList