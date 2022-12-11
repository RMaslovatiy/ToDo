import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from "@mui/material";


const ConfirmChangeTitle = ({ onClick }) => {


    return (
        <div
            className='edit-button-list'
            onClick={onClick}>
            <Tooltip title="Confirm change" placement="right">
                <CheckIcon fontSize='small' />
            </Tooltip>
        </div>
    )
}

export default ConfirmChangeTitle