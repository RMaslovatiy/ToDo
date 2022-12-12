import { TextField } from "@mui/material"
import React, { useState } from "react"
import Confirm from "../components/confirm";

const AddItemField = ({ id, onKeyDown, visibility, idAddButton, addItem }) => {

    const [value, setValue] = useState('');
    const data = {
        name: { name: value },
        id,
    };

    const confirmClick = () => {
        addItem(data)
        resetValue()
    };

    function resetValue() {
        setValue('')
    }

    if (visibility && id === idAddButton) {
        return (
            <div className="item-input" >

                <TextField
                    fullWidth
                    color="primary"
                    size="small"
                    id="outlined-basic"
                    label="Введіть підзадачу"
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => onKeyDown(e, data, resetValue)}

                />
                <Confirm onClick={confirmClick} />
            </div>
        )
    }
}
export default AddItemField