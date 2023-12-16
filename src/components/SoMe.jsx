//{ Lavet af Victoria }


import { Box, Stack } from '@mui/material';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';
import Content from './content';

export default function SoMe() {
    const soMe = [296];
    const url = "home-page";

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
                        <FacebookEmbed url='https://www.facebook.com/profile.php?id=100057440410445' width={550} height={600} />
                    </Box>

                    <Box>
                        <InstagramEmbed url='https://www.instagram.com/fusfri.dk/' width={550} height={600} />
                    </Box>

                </Stack>
            </Stack>
        </main>


    )
}