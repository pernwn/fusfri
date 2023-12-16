// Lavet af Victoria

import { Box, List, ListItemIcon, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo/fusfri-logo.png";

import SchoolIcon from '@mui/icons-material/School';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import "../styles/vic.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

// Copyright-funktionen er en separat komponent, der viser copyright-informationen i bunden af siden.
export function Copyright(props) {
  return (
    <Typography variant="subtitle2" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fussingø-Egnens Friskole
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = forwardRef((props, ref) => {
  // Opretter en ref til footer-sektionen.
  const footerRef = useRef(null);

  // Bruger useImperativeHandle-hook til at give en metode til at få højden af footer-sektionen.
  useImperativeHandle(ref, () => ({
    getHeight: () => footerRef.current.offsetHeight,
  }));

  return (
    <Box ref={footerRef}
      sx={{
        backgroundColor: myTheme => myTheme.palette.background.paper,
        borderRadius: "2em 2em 0 0",
        padding: "4em",
        boxShadow: " 0 15px 25px grey;",
      }}
    >
      <footer id="sidefod">
        <Stack spacing={8} direction={'row'} sx={{ width: "120%" }} >
          {/* Adresse-sektionen med skolens adresse og CVR-nummer. */}
          <Box className="footerTxt" sx={{ width: "80%" }}>
            <Typography variant="h6">Adresse<ListItemIcon className="f_icon"><SchoolIcon color="primary" /></ListItemIcon></Typography>
            <List>
              <Typography variant="body1">Byvejen 8 <br /> Sønderbæk <br />8920 Randers</Typography>
            </List>

            <Typography><b>CVR.</b> 25501349</Typography>
          </Box>

          {/* Kontakt-sektionen med telefonnumre til forskellige afdelinger. */}
          <Box className="footerTxt" >
            <Typography variant="h6" >Kontakt<ListItemIcon className="f_icon"><CallIcon color="primary" /></ListItemIcon></Typography>
            <List>
              <Typography variant="body1"><b>Skole: </b><Link to="tel:+4551724763">+45 5172 4763</Link></Typography>
              <Typography variant="body1"><b>Børnehave: </b><Link to="tel:+4523467754">+45 2346 7754</Link></Typography>
              <Typography variant="body1"><b>Vuggestue: </b><Link to="tel:+4523467785">+45 2346 7785</Link></Typography>
              <Typography variant="body1"><b>Fritidsordning: </b><Link to="tel:+4523464737">+45 2346 4737</Link></Typography>
            </List>
          </Box>

          {/* Åbningstider-sektionen med information om sekretærens træffetider. */}
          <Box className="footerTxt" >
            <Typography variant="h6">Åbningstider<ListItemIcon className="f_icon"><AccessTimeFilledIcon color="primary" /></ListItemIcon></Typography>
            <List>
              <Typography variant="body1"><b>Sekretæren træffes bedst mandag til torsdag:</b> <br /> 9.00 – 11.00 og 13.00 – 15.00</Typography>
            </List>
          </Box>
        </Stack>

        {/* Stak med tekst og links til højre, herunder skolens logo, privatlivspolitik-link og copyright-information. */}
        <Stack sx={{ textAlign: "right" }}>
          <Link to="/"  >
            <img src={logo} alt="Fussingø-Egnens Friskole logo" style={{ width: "40%", marginBottom: "2em" }} />
          </Link>
          <Typography variant="body1"><Link to="cookieprivat">Cookie- og Privatlivspolitik</Link></Typography>
          <Copyright />
        </Stack>

      </footer>
    </Box>
  )
})

Footer.displayName = "Footer";
export default Footer;

