import RemoveIcon from '@mui/icons-material/Remove';
import { Tooltip } from '@mui/material';

const DeleteItemButton = ({ id, onClick }) => (
    <div className="del-button"
        onClick={() => onClick(id)}
    >
        <Tooltip title="Delete Item" placement="right">
            <RemoveIcon fontSize="small" />
        </Tooltip>
    </div>)

export default DeleteItemButton