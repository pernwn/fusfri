import { Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


export const FilledBtn = (props) => {
    return (
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

export const LinkBtn = (props) => {
    return (
        <Button variant="outlined"
            component={NavLink}
            to={props.page}

            sx={{
                width: `${props.w}`,
            }}
        >
            <Typography variant="caption">{props.name}</Typography>
        </Button>
    )
}