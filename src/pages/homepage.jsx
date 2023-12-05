import { Box, Typography } from "@mui/material";
import { FilledBtn } from "../components/buttons";
import { useEffect, useState } from "react";

import Content from "../components/content";

import '../App.css'

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
    <Box 
      sx={{
        width:"100%",
      }}
    >
      <section className="hero">
      {posts.map(post => (
                <Content key={post.id} post={post} />
            ))}
      </section>


    </Box>

  )
}