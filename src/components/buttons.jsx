import { Button, Typography } from "@mui/material"

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