

import { Box, Button, Collapse, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react"
import { FilledBtn } from "./buttons";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";


/*const DropdownMenu = ({ open, trigger, menu }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            {trigger}
            {open ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding
                        sx={{
                            width: '100%',
                            minWidth: "max-content",
                            bgcolor: 'background.paper',
                            boxShadow: '0 8px 20px grey',
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            cursor: 'pointer'

                        }}>
                        {menu.map((menuItem, index) => (
                            <ListItemButton>
                                <ListItemText key={index} primary={menuItem.sub} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

            ) : null}
        </Box>
    );
};*/

/*
export const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = useState(false);

    const handleInformation = () => {
        setOpen(!open);
    }

    const handleMenu = () => {
        console.log("clicked");
    }

    return (
        <Box sx={{ position: 'relative' }}>

            

            <DropdownMenu
                open={open}
                trigger={<FilledBtn name="Information" event={handleInformation} icon={open ? <ExpandLess /> : <ExpandMore />} />}
                menu={[
                    <ListItemButton>
                        <ListItemText key={index} primary={menuItem.sub} />
                    </ListItemButton>
                ]}
            />

            { /*           <FilledBtn name="Information" event={handleInformation} icon={open ? <ExpandLess /> : <ExpandMore />} />
            {open ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding
                        sx={{
                            width: '100%',
                            minWidth: "max-content",
                            bgcolor: 'background.paper',
                            boxShadow: '0 8px 20px grey',
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'absolute',
                            cursor: 'pointer'

                        }}>

                        <ListItemButton onClick={handleMenu}>
                            <ListItemText primary="Praktisk" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Året på Fusfri" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Dagtilbud" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Faciliteter" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemText primary="Forældreinfo." />
                        </ListItemButton>


                    </List>
                </Collapse>
            ) : null}}




        </Box>
    )
}*/

export const DropdownBtn = (props) => {
    const [open, setOpen] = useState(false);

    const handleInformation = () => {
        setOpen(!open);
    }

    const handleMenu = () => {
        console.log("clicked");
    }

    return (
        <Box>
            <Button variant="contained" endIcon={open ? <ExpandLess/> : <ExpandMore/>} onClick={handleInformation}
                component={NavLink}

                sx={{
                    width: `${props.w}`,
                    marginRight: `${props.mr}`,
                }}
            >
                <Typography variant="button">{props.name}</Typography>
            </Button>
            
        </Box>
    )
}