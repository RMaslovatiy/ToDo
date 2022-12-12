import CheckIcon from '@mui/icons-material/Check';
import { Tooltip } from "@mui/material";


const Confirm = ({ onClick }) => {


    return (
        <div
            className='confirm'
            onClick={onClick}>
            <Tooltip title="Confirm" placement="right">
                <CheckIcon fontSize='small' />
            </Tooltip>
        </div>
    )
}

export default Confirm