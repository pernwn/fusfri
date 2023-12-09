import { Box, Stack } from '@mui/material';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

export default function SoMe() {
    return (
        <Stack spacing={4} direction={"row"} sx={{ display: 'flex', justifyContent: 'center', height:'50em', marginTop:'5em'}}>
        <Box>
            <FacebookEmbed url='https://www.facebook.com/profile.php?id=100057440410445' width={550} height={600} />
        </Box>

        <Box>
            <InstagramEmbed url='https://www.instagram.com/fusfri.dk/' width={550} height={600} />
        </Box>

        </Stack>
    


    )
}