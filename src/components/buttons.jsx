//{ Lavet af Victoria }


import { Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"


const FilledBtn = (props) => {
    return (
        <Button endIcon={props.icon} onClick={props.event}
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

const OutlinedBtn = (props) => {
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

const LinkBtn = (props) => {
    return (
        <Button variant="filled"
            sx={{
                width: `${props.w}`,
            }}
        >
            <Typography variant="caption">{props.name}</Typography>
        </Button>
    )
}

export {FilledBtn, OutlinedBtn, LinkBtn}