//{ Lavet af Victoria }



import { Box, Stack, Typography } from "@mui/material";
import { CardProp, OutlinedBtn } from "../components/buttons";



//Individuel styling som udgangspunkt – sammensætter alt til sidst
import '../styles/vic.css'
import SoMe from "../components/SoMe";
import Content from "../components/content";
import Form from "../components/muiForm";


//Import billeder
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


export default function HomePage() {
  const kontakt = [292];
  const institutioner = [321];
  const url = "home-page";




  return (
    <main style={{
      marginInline: "5em",
    }}>
      <Stack spacing={8}>
        <iframe //hero-video fra fusfris youtubekanal
          width="100%"
          height="580vh"
          src="https://www.youtube.com/embed/JYYtjlpkpeM?si=4Y6eEt39IDBrTJQw?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "1em", 
        }}
        ></iframe>

        <Stack direction={"row"} spacing={4} className="bgGraphic">

          {kontakt.map(postID => (
            <Box key={postID}>
              <Content site={url} postId={postID} />
            </Box>
          ))}


          <Form />
        </Stack>


        <Stack sx={{ alignItems: "center", height: "90vh" }}>
          {institutioner.map(postID => (
            <Box key={postID} sx={{ width: "85%",
            "@media (min-width:600px)": { width: "100%" }
            }}>
              <Content site={url} postId={postID} />
            </Box>
          ))}

          <Stack direction={"row"} spacing={4} sx={{ width: "50%" }} className="imgContainer">
            <div><Link to="/" ><img src={friskole} alt="Friskole billede" className="h-imgLink" /></Link></div>
            <div><Link to="/"><img src={boernehave} alt="Børnehave billede" className="h-imgLink" /></Link></div>
            <div><Link to="/"><img src={vuggestue} alt="Vuggestue billede" className="h-imgLink" /></Link></div>
          </Stack>

        </Stack>

        <SoMe />



        <Box sx={{ height: "70vh", width: "100%", textAlign:"center" }} /* TODO: knap til scroll af kort */>
          <Typography variant="h3">Indblik i Fusfri&apos;s dagligdag</Typography>
          <Stack direction={"row"} spacing={4} sx={{ overflowX: "auto", width: "100%", p: "2% 4%", scrollbarColor: "transparent" }}>
            <CardProp
              img={gaard}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />

            <CardProp
              img={leg}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />

            <CardProp
              img={dreng}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />

            <CardProp
              img={gynge}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />

            <CardProp
              img={basket}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />

            <CardProp
              img={corn}
              title="Friskolen"
              cardTitle="Det sker på friskolen..."
              body="Fussingø-Egnens Friskole, et forældredrevet undervisningssted fra børnehaveklasse til og med 8. klasse, stræber efter at skabe et trygt bindeled mellem det lille familiære fællesskab og det større skole- og samfundsfællesskab."
              href="/friskole"
            />
          </Stack>
        </Box>

        <Box sx={{ display: "flex",  justifyContent: "center", height: "40vh", textAlign: "center"    }}>
          <Box sx={{display: "flex", justifyContent:"center", flexDirection: "column", alignItems: "center", width: "80%", height:"10em"        }}>
            <Typography variant="h2" gutterBottom>Kontakt os i dag og få en uforpligtende samtale!</Typography>
            <OutlinedBtn name="Start læringsrejse" page="/kontakt" w="15em" />
          </Box>
        </Box>
      </Stack>
    </main>
  );
}
