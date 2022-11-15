import { TextField } from "@mui/material"
import React, { useState } from "react"

const AddItemField = ({ id, onKeyDown, visibility, idAddButton }) => {

    const [value, setValue] = useState('');
    if (visibility && id === idAddButton) {

        function resetValue() {
            setValue('')
        }

        return (
            <div className="item-input" >

                <TextField
                    fullWidth
                    color="success"
                    size="small"
                    id="outlined-basic"
                    label="Введіть підзадачу"
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => onKeyDown(id, e, value, resetValue)}

                />

            </div>
        )
    }
}
export default AddItemField