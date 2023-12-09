import WordPressFag from "../components/fag";
import { Stack, Typography } from '@mui/material';
import '../styles/rin.css'
import gif from '../assets/gifgif.gif'

export default function Friskole() {
    const postIDs = [28, 191, 149, 177, 179, 181, 183, 185, 187, 189];

    return( 
        <main>
            <Stack
            sx={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: '#ffff',
                flexWrap: 'wrap',

            }}
            >
            <img src={gif}></img>
            <Typography variant="h1" 
              sx={{
                textAlign:'center',

              }}
            > Friskolen</Typography>
            <div
             sx={{
                textAlign:'center',
              }}>
            <Typography variant='h4'>Hos os foregår tingene anderledes end på en folkeskole, prøv at se en hverdag på vores lille skole!</Typography>
            </div>
        </Stack>
            <Stack
                sx={{
                    padding: 5,
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
                            maxWidth: 400,
                            p: 2,

                        }}
                    >
                        <WordPressFag postId={postID} />
                    </Stack>
                ))}
            </Stack>
          
           
        </main>
    );
}
