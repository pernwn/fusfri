import { Box, Button, Typography } from "@mui/material";
import { useState } from "react"
import { FilledBtn } from "./buttons";

export const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleInformation = () => {
        setOpen(!open);
    }

    return (
        <Box>
            <FilledBtn name="Information" event={handleInformation} />
            {open ? <Typography>Is Open</Typography> : <Typography>Is Closed</Typography>}
        </Box>
    )
}

export const DropdownBtn = (props) => {
    return (
        <Box>
            <Button variant="contained" endIcon={props.icon} onClick={props.event}
                component={NavLink}
                to={props.page}

                sx={{
                    width: `${props.w}`,
                    marginRight: `${props.mr}`,
                }}
            >
                <Typography variant="button">{props.name}</Typography>
            </Button>
            {open ? <Typography>Is Open</Typography> : <Typography>Is Closed</Typography>}
        </Box>
    )
}