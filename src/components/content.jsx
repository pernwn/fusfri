//{ Lavet af Victoria }


import '../App.css'
import { Box, Card, Paper, Stack, Typography } from "@mui/material";

import parse from 'html-react-parser'
import { useEffect, useState } from 'react';

//TODO: Skal finde ud af bedre måde at hente individuelle – tjek acf og cpt implementering på notion TODO:!!

export default function Content({ postId}){

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch(`https://www.wordpress.vicw.dk/wp-json/wp/v2/posts/${postId}?_embed`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getPosts();
    }, [postId]);

    /*let image = `https://www.wordpress.vicw.dk/wp-json/wp/v2/posts/${postId}?_embed`;

    if (posts._embedded && posts._embedded["wp:featuredmedia"]) {
        image = posts._embedded["wp:featuredmedia"][0].source_url;
    }*/

    return (
        <Stack
        >
          {posts && (
            <Box sx={{p:"5em"}}>
              <Typography variant="h2">{posts.title.rendered}</Typography>
              <div dangerouslySetInnerHTML={{ __html: posts.content.rendered }} />
            </Box>
          )}
        </Stack>
    );
};


