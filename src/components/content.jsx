// Lavet af Victoria

// Henter og viser indhold fra en WordPress API ved hjælp af Fetch API.
import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

// Content-funktionen modtager postId og site som props, bruger dem til at hente specifikke data fra WordPress API'en og viser indholdet.
export default function Content({ postId, site }) {

    // State-variabel til at gemme data fra WordPress API'en.
    const [post, setPost] = useState(null);

    // useEffect-hook, der kører fetchPost-funktionen, når postId eller site ændres.
    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Fetcher data fra WordPress API'en baseret på postId og site.
                const response = await fetch(`https://www.wordpress.vicw.dk/wp-json/wp/v2/${site}/${postId}?_embed`);
                
                // Håndterer fejl, hvis responsen ikke er ok.
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                
                // Konverterer responsen til JSON-format.
                const data = await response.json();
                
                // Opdaterer state-variablen post med data fra API'en.
                setPost(data);
            } catch (error) {
                // Håndterer fejl under fetch-processen og udskriver fejlmeddelelse i konsollen.
                console.error('Error fetching data:', error);
            }
        };

        // Kalder fetchPost-funktionen.
        fetchPost();
    }, [postId, site]);

    // Returnerer en stak (Stack) af komponenter, der indeholder titlen og indholdet af det hentede indlæg fra WordPress API'en.
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
