import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';

const EditList = ({ onClick, list }) => {
    return (
        <div className="change-button-list"
            onClick={() => onClick(list)}
        >


            <Tooltip title="Edit list" placement="top">
                <EditIcon />
            </Tooltip>
        </div>
    )
}



export default EditList