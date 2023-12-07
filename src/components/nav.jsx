
import { FilledBtn, LinkBtn, OutlinedBtn } from "./buttons";
import { useEffect, useState } from "react";

//IKONER FRA MUI
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HomeIcon from '@mui/icons-material/Home';

//Individuel styling som udgangspunkt – sammensætter alt til sidst 
import '../styles/vic.css'

import logo from "../assets/logo/fusfri-logo.png"
import { Box, ButtonGroup, Collapse, Fab, Fade, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./search";


import { DropdownBtn } from "./dropdown";
import Drop from "./test";

/*
const DropdownMenu = styled((props) => {
    const { open, ...other } = props;
    return <ExpandMoreRoundedIcon {...other} />;
})(({ theme, open }) => ({
    transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));*/


export default function Nav() {
    /*This code defines a functional component Nav that displays a navigation bar for a website. 
The navigation bar contains a logo, a set of navigation buttons, 
and an event listener that triggers when the user scrolls. 
The event listener updates the state isScrolled to true if the user scrolls more than 150 pixels, 
otherwise false. This state is used to conditionally apply different CSS classes to the navigation bar, 
creating a different look for the scrolled state. */

    // Set scroll state and scroll event handler
    const [isScrolled, setScrolled] = useState(false);


    const handleScroll = () => window.scrollY > 150 ? setScrolled(true) : setScrolled(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    //TODO: nav active states TODO: dropdown !!!!!!!!!
    return (
        <>
            <header className={`header-container ${isScrolled && 'header-scrolled'}`}>
                <img src={logo} className={`logo ${isScrolled && 'logo-scrolled'}`} alt="Fussingø-Egnens Logo" />

                <Drop/>

                <Box
                    component="nav" className={`nav-container ${isScrolled && 'nav-scrolled'}`}
                    sx={{
                        display: "flex",
                        flexDirection: "column",

                    }}
                >
                    <Search />

                    <Box className={`btn-container ${isScrolled && 'btn-scrolled'}`} sx={{display:"flex", alignItems:"center"}}>
                        <HomeIcon sx={{mr:".5em", fontSize:"35pt"}} />
                       
                        <DropdownBtn name="Information" mr="1em"/>
                        <DropdownBtn name="Om Fusfri" mr="1em"/>
                        <DropdownBtn name="Kontakt" mr="1em"/>

                        {/*TODO: KIG PÅ DETTE !!!!! ikke færdig ––– prøv denne https://www.robinwieruch.de/react-dropdown/  <FilledBtn name="Hjem" page="/" mr="1em" />
                        <List
                            component="nav"
                        >

                            <FilledBtn name="Information" mr="1em" event={handleOpen} icon={open ? <ExpandLess /> : <ExpandMore />} />
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', boxShadow: '0 8px 20px grey' }}>
                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="Praktisk" />
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="Året på Fusfri" />
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="Dagtilbud" />
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="Faciliteter" />
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 2 }}>
                                        <ListItemText primary="Forældreinfo." />
                                    </ListItemButton>

                                </List>
                            </Collapse>
                        </List>

                                                <FilledBtn name="Om Fusfri" page="/omFus" mr="1em" icon={<ExpandMoreRoundedIcon />} />
                        <FilledBtn name="Kontakt" page="/kontakt" mr="1em" icon={<ExpandMoreRoundedIcon />} />


*/}







                    </Box>



                </Box>


            </header>



            <Fade in={isScrolled}>
                <Box sx={{ mr: 5 }} className={`action-btn-container ${isScrolled && 'action-btn-scrolled'}`}  >

                    <Link to="/kontakt">
                        <Fab variant="extended" aria-label="contact">
                            <PhoneIcon sx={{ mr: 1 }} color="secondary" />
                            <Typography variant="button" sx={{ color: mytheme => mytheme.palette.secondary.main, fontWeight: "bold" }} >Kontakt</Typography>
                        </Fab>
                    </Link>

                    <Fab size="small" color="secondary" aria-label="up" onClick={handleClick}>
                        <UpIcon />
                    </Fab>

                </Box>
            </Fade>


        </>
    )

}