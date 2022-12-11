import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from "@mui/material";


const EditListTitle = ({ onClick }) => {


    return (
        <div
            className='edit-button-list'
            onClick={onClick}>
            <Tooltip title="Edit List Title" placement="right">
                <EditIcon fontSize='small' />
            </Tooltip>
        </div>
    )
}

export default EditListTitle