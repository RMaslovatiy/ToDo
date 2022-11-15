import React, { useState } from 'react';

import { addListRequest } from "./requests";

const AddList = ({ lists, setLists }) => {

    const [value, setValue] = useState('')

    function addTitle() {
        const listTitle = { title: value }
        addListRequest(listTitle)
            .then(response => setLists([...lists, response]))

        setValue('');
    }

    function handleEnter(event) {
        if (event.key === 'Enter') addTitle()
    };

    return (
        <div>
            <input
                onKeyDown={handleEnter}
                placeholder="Введіть задачу"
                value={value}
                onChange={(e) => setValue(e.target.value)}>
            </input>

            <button onClick={addTitle}>OK</button>
        </div>
    )
}

export default AddList