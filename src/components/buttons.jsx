//{ Lavet af Victoria }


import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
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

const CardProp = (props) => {
    return (
        <Card elevation={4} sx={{ minWidth:380, height: "100%"}}>
            <CardMedia
                sx={{ height: 150 }}
                image={props.img}
                title={props.title}
            />
            <CardContent sx={{p:4, textAlign:"left"}}>
                <Typography variant="h5" gutterBottom component="div">{props.cardTitle}</Typography>
                <Typography variant="body2">
                    {props.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.href}>Læs mere</Button>
            </CardActions>
        </Card>

    )
}

export { FilledBtn, OutlinedBtn, LinkBtn, CardProp }