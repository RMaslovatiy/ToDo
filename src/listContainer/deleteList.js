import { DeleteForever } from "@mui/icons-material";
import { deleteListRequest } from "../requests";
import { Tooltip } from "@mui/material";

const DeleteList = ({ id, list, lists, setLists, onClick }) => {
  return (
    <div
      className="del-button-list"
      onClick={() => deleteList(id, list, lists, setLists)}
    >
      <Tooltip title="Delete List" placement="right">
        <DeleteForever />
      </Tooltip>
    </div>
  );
};

function deleteList(id, list, lists, setLists) {
  setLists([...lists.slice(0, id), ...lists.slice(id + 1)]);

  deleteListRequest(list);
}

export default DeleteList;
