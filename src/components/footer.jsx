import { Box, List, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo/fusfri-logo.png";

import SchoolIcon from '@mui/icons-material/School';

export function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fussingø-Egnens Friskole
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box>
      <footer>
        <Link to="/">
          <img src={logo} alt="Fussingø-Egnens Friskole logo" className="logo" />
        </Link>

        <Stack spacing={8} direction={"row"}>
          <Box>
            <Typography variant="body1" >Overskrift</Typography>
            <List>{/*TODO:*/}
              <Link to=""><ListItemText><ListItemIcon><SchoolIcon /></ListItemIcon>Link til 1</ListItemText></Link>
              <Link to=""><ListItemText>Link til 2</ListItemText></Link>
                <Link to=""><ListItemText>Link til 3</ListItemText></Link>
                <Link to=""><ListItemText>Link til 4</ListItemText></Link>
            </List>
          </Box>

          <Box>
            <Typography variant="body1" >Overskrift</Typography>
            <List>
              <Link to=""><ListItemText>Link til 1</ListItemText></Link>
              <Link to=""><ListItemText>Link til 2</ListItemText></Link>
              <Link to=""><ListItemText>Link til 3</ListItemText></Link>
              <Link to=""><ListItemText>Link til 4</ListItemText></Link>
            </List>
          </Box>
        </Stack>

      </footer>
    </Box>
  );
}