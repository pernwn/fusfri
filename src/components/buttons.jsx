// Lavet af Victoria


// Dette modul indeholder flere genbrugelige React-komponenter designet til at skabe konsistente og stilfulde knapper og kort.

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

// NavBtn-komponenten repræsenterer en knape, der kan indeholde en ikon i slutningen – bruges primært til nav, men kan også anvendes andre steder.
const NavBtn = (props) => {

    return (
        <Button
            endIcon={props.icon}
            onClick={props.event}
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

// FilledBtn-komponenten repræsenterer en knap med fyldt baggrund
const FilledBtn = (props) => {
    return (
        <Button
            variant="contained"
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

// LinkBtn-komponenten repræsenterer en fyldt knap uden en specifik destination, normalt brugt som et link.
const LinkBtn = (props) => {
    return (
        <Button
            variant="filled"
            sx={{
                width: `${props.w}`,
            }}
        >
            <Typography variant="caption">{props.name}</Typography>
        </Button>
    )
}

// CardProp-komponenten repræsenterer et materiale designkort med en billedoverskrift, indhold og en "Læs mere" knap.
const CardProp = ( {item} ) => {
    return (
        <Card elevation={4} sx={{ minWidth: 380, height: "100%" }}>
            <CardMedia
                sx={{ height: 150 }}
                image={item.img}
                title={item.title}
            />
            <CardContent sx={{ p: 4, textAlign: "left" }}>
                <Typography variant="h5" gutterBottom component="div">{item.cardTitle}</Typography>
                <Typography variant="body2">
                    {item.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={item.href}>Læs mere</Button>
            </CardActions>
        </Card>
    )
}

const ScrollBtn = ({ onScroll }) => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <ArrowCircleLeftRoundedIcon fontSize={20} onClick={() => onScroll(-50)} />
            <ArrowCircleRightRoundedIcon fontSize={20} onClick={() => onScroll(50)} />
        </Box>
    )
}


export { NavBtn, FilledBtn, LinkBtn, CardProp, ScrollBtn }
