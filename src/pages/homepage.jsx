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
      const response = await fetch("https://www.wordpress.vicw.dk/wp-json/wp/v2/posts?_embed&categories=4");
      const data = await response.json();
      setPosts(data); //opdaterer variablen der hedder "posts"

    }



//    await getPosts(); 
// der skal et eller andet await på her ellers så kalder den efter posts forevigt. Dan kan forklare det bedre lol



  }, []); //Udtryk for dependencies – hvis ikke den er med, så går useEffect amok og vil stå og hente dataen i uendelighed. Stopper useEffect() når den har kørt 1 gang

  return (
    <Container component="main">
      <Box
        sx={{
          width: "100%",
        }}
      >
        <section className="hero">
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