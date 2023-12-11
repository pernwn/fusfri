import WordPressFag from "../components/fag";
import { Stack, Typography } from '@mui/material';
import '../styles/rin.css'
import '../styles/responsive.css'
import gif from '../assets/gifgif.gif'

export default function Friskole() {
    const postIDs = [28, 191, 149, 177, 179, 181, 183, 185, 187, 189];

    return (
        <main>
            <Stack
                sx={{
                    flexDirection: 'row',
                    padding: 1,
                    backgroundColor: '#ffff',
                    flexWrap: 'wrap',

                }}
            >
                <img src={gif} className="gif-skole" ></img>
                <Typography variant="h1"
                    sx={{
                        textAlign: 'center',

                    }}
                > Friskolen</Typography>
                <Stack
                    sx={{
                        textAlign: 'center',
                    }}>
                    <Typography variant='h4'>Hos os foregår tingene anderledes end på en folkeskole, prøv at se en hverdag på vores lille skole!</Typography>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    overflowX: 'auto', // Enable horizontal scrolling
                    display: 'flex',
                    flexDirection: 'row', // Display items horizontally
                }}
            >
                {postIDs.map(postID => (
                    <Stack
                        key={postID}
                        className={`post-${postID}`}
                        sx={{
                            borderRadius: 8,
                            flex: '0 0 auto',
                            p: 0.9,
                        /*maxWidth: 400,*/


                        }}
                    >
                <WordPressFag postId={postID} />
            </Stack>
                ))}
        </Stack>
          
           
        </main >
    );
}
