import { useState } from "react";
import { useDispatch } from "react-redux";
import { editList } from "../../redux/reducers/lists/asyncThunks";

function ListTitleInput({ list, hideListTitleInput }) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(list.title);

    const changeList = (event) => {
        if (event.key === "Enter") {
            const data = {
                value,
                list
            };
            dispatch(editList(data));
            hideListTitleInput();
        }
    };

    return (
        <div>
            <input
                className="input-element"
                label="Введіть новий заголовок"
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={changeList}
            />

        </div>

    )
}

export default ListTitleInput

