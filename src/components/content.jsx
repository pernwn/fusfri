//{ Lavet af Victoria }


import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';


//TODO: Skal finde ud af bedre måde at hente individuelle – tjek acf og cpt implementering på notion TODO:!!

export default function Content({ postId, site }) {

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://www.wordpress.vicw.dk/wp-json/wp/v2/${site}/${postId}?_embed`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPost();
    }, [postId, site]);

    return (
        <Stack>
          {post && (
            <Box sx={{p:"2em"}}>
              <Typography variant="h3" gutterBottom>{post.title.rendered}</Typography>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </Box>
          )}
        </Stack>
    );
}




