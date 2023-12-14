//{ Lavet af Victoria }



import { Box, Container, Paper, Stack } from "@mui/material";
import { FilledBtn } from "../components/buttons";



//Individuel styling som udgangspunkt – sammensætter alt til sidst
import "../styles/vic.css";
import SoMe from "../components/SoMe";
import Content from "../components/content";
import Form from "../components/muiForm";



export default function HomePage() {
  const kontakt = [292];
  const url = "home-page";


  /*
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        async function getData() {
            const url = "https://www.wordpress.vicw.dk/wp-json/wp/v2/home-page";
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
  
        }
        getData();
    }, []);*/



  return (
    <Container component="main">
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

        <Stack direction={"row"} spacing={4}>

            {kontakt.map(postID => (
              <Box key={postID}>
                <Content site={url} postId={postID} />
              </Box>
            ))}

              <Form/>
        </Stack>

      </Stack>






      {/*<Box>
        <Paper
          sx={{
            width: "25%",
            padding: "2em",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Kontakt os
          </Typography>
          <Typography variant="body1">
            Vi vil meget gerne hjælpe dig med at få mere information om optagelse på Fusfri. Lad os sammen undersøge,
            hvordan vi kan opfylde dit barns behov. Vi opfordrer forældre til at kontakte os, selvom der måske er ledige
            pladser, da vi gerne vil sikre, at skolen er det rette match for dit barns behov.
          </Typography>
        </Paper>
      </Box>*/}


      <SoMe />
    </Container>
  );
}
