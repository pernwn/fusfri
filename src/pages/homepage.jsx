//{ Lavet af Victoria }



import { Container, Paper, Stack } from "@mui/material";
import { FilledBtn } from "../components/buttons";



//Individuel styling som udgangspunkt – sammensætter alt til sidst
import "../styles/vic.css";
import SoMe from "../components/SoMe";
import { useState } from "react";
import { useEffect } from "react";
import ContentScn from "../components/content-scn";








export default function HomePage() {



  const [posts, setPosts] = useState([]);

  useEffect(() => {
      async function getData() {
          const url = "https://www.wordpress.vicw.dk/wp-json/wp/v2/home-page";
          const response = await fetch(url);
          const data = await response.json();
          setPosts(data);

      }
      getData();
  }, []);



  return (
    <Container component="main">
      <FilledBtn name="Friskole" page="/friskole" />
      <FilledBtn name="Kalender" page="/information" />

      <iframe
        width="100%"
        height="600vh"
        src="https://www.youtube.com/embed/JYYtjlpkpeM?si=4Y6eEt39IDBrTJQw?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ borderRadius: "1.5em" }}
      ></iframe>


{/*TODO: fiks
      <Stack>
        {postIDs.map(postID => (
          <Paper key={postID}>
              <Content postId={postID} />
          </Paper>
        ))}
      </Stack>*/}

      <Stack spacing={4} direction={"column-reverse"}>
        {posts.map(post => (
          <Paper key={post.id} sx={{p:"3em", width:"50%"}}>
            <ContentScn post={post} />
          </Paper>
        ))}
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
