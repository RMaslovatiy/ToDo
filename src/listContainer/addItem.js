import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';

const AddItem = ({ onClick, id }) => {
    return (
        <div className="add-item"
            onClick={() => onClick(id)}
        >
            <Tooltip title="Add Item" placement="top">
                <AddIcon />
            </Tooltip>
        </div>
    )
}



export default AddItem