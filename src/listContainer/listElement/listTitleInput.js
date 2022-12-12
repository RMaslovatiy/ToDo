import { useState } from "react";
import { useDispatch } from "react-redux";
import { editList } from "../../redux/reducers/lists/asyncThunks";
import Confirm from "../../components/confirm";

function ListTitleInput({ list, hideListTitleInput }) {
    const dispatch = useDispatch();
    const [value, setValue] = useState(list.title);
    const data = {
        value,
        list
    };

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            changeList();
        }
    };

    const changeList = () => {
        dispatch(editList(data));
        hideListTitleInput();
    };

    return (
        <div >
            <input
                className="input-element"
                label="Введіть новий заголовок"
                defaultValue={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
            />

            <Confirm onClick={changeList} />
        </div>
    )
}

export default ListTitleInput

