


import { NavBtn } from '../components/buttons';
import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  return (

      <Box sx={{ height: "70vh", display: "flex", justifyContent: "center", alignItems:"center", flexDirection: "column", mt:15 }}>
        <Typography variant="h3">Side ikke fundet</Typography>
        <Typography variant="body1">Beklager, den side du leder efter, kunne ikke findes.</Typography>
        <NavBtn page="/" name="Tilbage til forside" />
        <iframe frameBorder={0} src="https://lottie.host/embed/5d9f8adc-b487-4e51-947a-54c80f9a1bc0/ByKUzY0QSt.json"></iframe>
      </Box>


  );
}
