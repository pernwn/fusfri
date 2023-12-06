import { Box, Container, Paper, Typography } from "@mui/material";
import { FilledBtn } from "../components/buttons";
import { useEffect, useState } from "react";

import Content from "../components/content";

//Individuel styling som udgangspunkt – sammensætter alt til sidst 
import '../styles/vic.css'


export default function HomePage() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getPosts() {
      const url = "https://www.wordpress.vicw.dk/wp-json/wp/v2/posts?_embed&categories=4";
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data); //opdaterer variablen der hedder "posts"

    }

    getPosts();

  }, []); //Udtryk for dependencies – hvis ikke den er med, så går useEffect amok og vil stå og hente dataen i uendelighed. Stopper useEffect() når den har kørt 1 gang

  return (
    <Container component="main">

      <iframe width="100%" height="600vh" src="https://www.youtube.com/embed/JYYtjlpkpeM?si=4Y6eEt39IDBrTJQw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{borderRadius:"1.5em"}}></iframe>


      <Box>
        <section>
          {posts.map(post => (
            <Content key={post.id} post={post} />
          ))}
        </section>


      </Box>

      <Box>
            <Paper
              sx={{
                width:"25%",
                padding:"2em"
                  
              }}
            >
              <Typography variant="h3" gutterBottom>Kontakt os</Typography>
              <Typography variant="body1">Vi vil meget gerne hjælpe dig med at få mere information om optagelse på Fusfri. Lad os sammen undersøge, hvordan vi kan opfylde dit barns behov. Vi opfordrer forældre til at kontakte os, selvom der måske er ledige pladser, da vi gerne vil sikre, at skolen er det rette match for dit barns behov.</Typography>
            </Paper>



      </Box>
    </Container>

  )
}