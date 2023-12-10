import { Box, List, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo/fusfri-logo.png";

import SchoolIcon from '@mui/icons-material/School';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import "../styles/vic.css";


export function Copyright(props) {
  return (
    <Typography variant="body2" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fussingø-Egnens Friskole
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (

    <Box
      sx={{
        backgroundColor: myTheme => myTheme.palette.background.paper,
        borderRadius: "2em 2em 0 0",
        padding: "4em",
        boxShadow: " 0 15px 25px grey;",
      }}
    >
      <footer>




        <Stack spacing={8} direction={'row'} sx={{width:"120%"}} >
          <Box className="footerTxt" sx={{width:"80%"}}>
            <Typography variant="h5">Adresse<ListItemIcon className="f_icon"><SchoolIcon color="primary"/></ListItemIcon></Typography>
            <List>{/*TODO:*/}
              <ListItemText>Byvejen 8</ListItemText>
              <ListItemText>Sønderbæk</ListItemText>
              <ListItemText>8920 Randers</ListItemText>
            </List>

            <ListItemText><b>CVR.</b> 25501349</ListItemText>
          </Box>
          

          <Box className="footerTxt" >
            <Typography variant="h5" >Kontakt<ListItemIcon className="f_icon"><CallIcon color="primary"/></ListItemIcon></Typography>
            <List>
              <ListItemText><b>Skole: </b><Link  to="tel:+4551724763">+45 5172 4763</Link></ListItemText>
              <ListItemText><b>Børnehave: </b><Link to="tel:+4523467754">+45 2346 7754</Link></ListItemText>
              <ListItemText><b>Vuggestue: </b><Link to="tel:+4523467785">+45 2346 7785</Link></ListItemText>
              <ListItemText><b>Fritidsordning: </b><Link to="tel:+4523464737">+45 2346 4737</Link></ListItemText>
            </List>
          </Box>

          <Box className="footerTxt" >
            <Typography variant="h5">Åbningstider<ListItemIcon className="f_icon"><AccessTimeFilledIcon color="primary"/></ListItemIcon></Typography>
            <List>
              <ListItemText><b>Sekretæren træffes bedst mandag til torsdag:</b> <br/> 9.00 – 11.00 og 13.00 – 15.00</ListItemText>


            </List>
          </Box>


        </Stack>




        <Stack sx={{ textAlign: "right" }}>
          <Link to="/"  >
            <img src={logo} alt="Fussingø-Egnens Friskole logo" style={{ width: "40%", marginBottom:"2em" }} />
          </Link>

          <Link to="cookieprivat">Cookie- og Privatlivspolitik</Link>
  

          <Copyright />
        </Stack>

      </footer>
    </Box>

  );
}