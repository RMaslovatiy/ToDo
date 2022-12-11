import { DeleteForever } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useDispatch } from 'react-redux';
import { delList } from "../redux/reducers/lists/asyncThunks"

const DeleteList = (id) => {
  const dispatch = useDispatch();
  return (
    <div
      className="del-list-container"
      onClick={() => dispatch(delList(id.id))}
    >
      <Tooltip title="Delete List" placement="right">
        <DeleteForever />
      </Tooltip>
    </div>
  );
};

export default DeleteList;
