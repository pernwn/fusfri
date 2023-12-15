//{ Lavet af Victoria }



import { Box, Stack} from "@mui/material";
import { FilledBtn } from "../components/buttons";



//Individuel styling som udgangspunkt – sammensætter alt til sidst
import '../styles/vic.css'
import SoMe from "../components/SoMe";
import Content from "../components/content";
import Form from "../components/muiForm";




export default function HomePage() {
  const kontakt = [292];
  const institutioner = [321];
  const url = "home-page";


  return (
    <main style={{ marginInline:"5em",
      }}>
      <FilledBtn name="Friskole" page="/friskole" />
      <FilledBtn name="Kalender" page="/information" />
      <Stack spacing={8} >
        <iframe //hero-video
          width="100%"
          height="600vh"
          src="https://www.youtube.com/embed/JYYtjlpkpeM?si=4Y6eEt39IDBrTJQw?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "1.5em" }}
        ></iframe>

        <Stack direction={"row"} spacing={4} className="bgGraphic">
       
            {kontakt.map(postID => (
              <Box key={postID}>
                <Content site={url} postId={postID}/>
              </Box>
            ))}


          <Form />
        </Stack>


        <Stack>
          {institutioner.map(postID => (
            <Box key={postID} >
              <Content site={url} postId={postID} />
            </Box>
          ))}

          <Stack /* TODO: */> 
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Stack>

        </Stack>

            <SoMe/>

      </Stack>


    </main>
  );
}
