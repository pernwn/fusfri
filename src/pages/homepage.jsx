//{ Lavet af Victoria }

// Importerer nødvendige komponenter og stilarter
import { Box, Button, Stack, Typography } from "@mui/material";
import { CardProp, FilledBtn } from "../components/buttons";

// Individuel styling som udgangspunkt – sammensætter alt til sidst
import '../styles/vic.css'
import SoMe from "../components/SoMe";
import Content from "../components/content";
import Form from "../components/muiForm";



// Importerer billeder
import friskole from "../assets/billeder/friskole.jpeg"
import boernehave from "../assets/billeder/boernehave.jpeg"
import vuggestue from "../assets/billeder/vuggestue.jpeg"

import leg from "../assets/fusfri-billeder/fus-friskolen-leg-1280-06.jpeg"
import gaard from "../assets/fusfri-billeder/fus-friskolen-leg-1280-05.jpeg"
import gynge from "../assets/fusfri-billeder/fus-friskolen-leg-1280-01.jpeg"
import dreng from "../assets/fusfri-billeder/fusfri-vuggestu-leg-1280px_6.jpeg"
import basket from "../assets/fusfri-billeder/fus-friskolen-leg-1280-08.jpeg"
import corn from "../assets/fusfri-billeder/fus-friskolen-leg-1280-02.jpeg"

import { Link } from "react-router-dom";
import { useRef } from "react";
import ScrollCardFunction from "../components/ScrollCards";


export default function HomePage() {
  // Arrays med post-IDs
  const kontakt = [292];
  const institutioner = [321];
  const url = "home-page";

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    // Hovedcontainer med styling
    <main style={{
      marginInline: "5em",
    }}>
      <Stack spacing={8}>
        {/* Hero-video fra Fusfri's YouTube-kanal */}
        <iframe
          width="100%"
          height="580vh"
          src="https://www.youtube.com/embed/JYYtjlpkpeM?si=4Y6eEt39IDBrTJQw?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "1em", }}
        ></iframe>

        {/* Stak af sektioner med kontaktformular og indhold */}
        <Stack direction={"row"} spacing={4} className="bgGraphic">
          {kontakt.map(postID => (
            <Box key={postID}>
              <Content site={url} postId={postID} />
            </Box>
          ))}
          <Form />
        </Stack>

        {/* Sektion med information om institutioner og billeder */}
        <Stack sx={{ alignItems: "center", height: "90vh" }}>
          {institutioner.map(postID => (
            <Box key={postID} sx={{
              width: "90%",

            }}>
              <Content site={url} postId={postID} />
            </Box>
          ))}

          {/* Billeder med links til forskellige sektioner */}
          <Stack direction={"row"} spacing={4} sx={{ width: "50%" }} className="imgContainer">
            <div><Link to="*" ><img src={friskole} alt="Friskole billede" className="h-imgLink" /></Link></div>
            <div><Link to="*"><img src={boernehave} alt="Børnehave billede" className="h-imgLink" /></Link></div>
            <div><Link to="*"><img src={vuggestue} alt="Vuggestue billede" className="h-imgLink" /></Link></div>
          </Stack>
        </Stack>

        {/*Import af SoMe (Social Media) komponent*/}
        <SoMe />

        {/* TODO: arrow button - Sektion med forskellige kort med indhold om indblik i Fusfri's dagligdag */}
        <ScrollCardFunction/>

        {/* Sektion med kontaktinformation og knap til kontaktformular */}
        <Box sx={{ display: "flex", justifyContent: "center", height: "40vh", textAlign: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "80%", height: "10em" }}>
            <Typography variant="h2" gutterBottom>Kontakt os i dag og få en uforpligtende samtale!</Typography>
            <FilledBtn name="Start læringsrejse" page="/kontakt" w="15em" />
          </Box>
        </Box>
      </Stack>
    </main>
  );
}


