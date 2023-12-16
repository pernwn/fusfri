// Lavet af Victoria
// En side med indhold fra sociale medier og indholdet fra en WordPress-side.

import { Box, Stack } from '@mui/material';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';
import Content from './content';

// SoMe-komponenten, der indeholder indhold fra sociale medier og WordPress-side.
export default function SoMe() {
    // Array med IDs for indlæg på WordPress-siden og URL'en for WordPress-siden.
    const soMe = [296];
    const url = "home-page";

    // Returnerer JSX med indhold fra WordPress-siden og sociale medier.
    return (
        <main className='bgGraphic'>
            <Stack spacing={4} sx={{ width: "100%", height:"120vh" }}>
                {soMe.map(postID => (
                    <Box key={postID} sx={{width:"70%"}}>
                        <Content site={url} postId={postID} />
                    </Box>
                ))}

                <Stack spacing={4} direction={"row"} sx={{ display: 'flex', justifyContent: 'center', height: '45em'}}>
                    <Box>
                        {/* Indlejring af Facebook-feed med angivet URL, bredde og højde. */}
                        <FacebookEmbed url='https://www.facebook.com/profile.php?id=100057440410445' width={550} height={600} />
                    </Box>

                    <Box>
                        {/* Indlejring af Instagram-feed med angivet URL, bredde og højde. */}
                        <InstagramEmbed url='https://www.instagram.com/fusfri.dk/' width={550} height={600} />
                    </Box>
                </Stack>
            </Stack>
        </main>
    )
}
