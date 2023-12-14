//{ Lavet af Victoria }


import { Box, Stack, Typography } from '@mui/material';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

export default function SoMe() {
    return (
        <main>
            <Stack direction="column" spacing={2} sx={{ p: '0 5em', width: "100%" }}>
                <Typography variant='h2'>Kontakt os</Typography>
                <Typography variant='body1'>Wassup wassup sign your child over to satan</Typography> {/* jeg elsker det her, jeg synes vi skal beholde det kh Rina */}
            </Stack>

            <Stack spacing={4} direction={"row"} sx={{ display: 'flex', justifyContent: 'center', height: '50em', marginTop: '3em' }}>
                <Box>
                    <FacebookEmbed url='https://www.facebook.com/profile.php?id=100057440410445' width={500} height={600} />
                </Box>

                <Box>
                    <InstagramEmbed url='https://www.instagram.com/fusfri.dk/' width={500} height={600} />
                </Box>

            </Stack>
        </main>


    )
}