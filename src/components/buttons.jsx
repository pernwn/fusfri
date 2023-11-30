import { Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const FilledBtn = (props) => {
    return (
        <Button variant="contained"
            component={NavLink}
            to={props.page}

            sx={{

                width: `${props.w}`,
            }}
        >
            <Typography variant="button">{props.name}</Typography>
        </Button>
    )
}

export const OutlinedBtn = (props) => {
    return (
        <Button variant="outlined"
            component={NavLink}
            to={props.page}

            sx={{
                width: `${props.w}`,
            }}
        >
            <Typography variant="button">{props.name}</Typography>
        </Button>
    )
}