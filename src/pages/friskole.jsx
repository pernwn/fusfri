import WordPressFag from "../components/fag";
import { Stack, Typography } from '@mui/material';
import '../styles/rin.css'
import '../styles/responsive.css'
import gif from '../assets/gifgif.gif'
import Dagligdag from "../components/dagligdag";

export default function Friskole() {
    const postIDs = [28, 191, 149, 177, 179, 181, 183, 185, 187, 189];

    return (
        <main>
            <Stack className="friskole"
                sx={{
                    flexDirection: 'row',
                    padding: 1,
                    backgroundColor: '#ffff',

                }}
            >

                <Stack
                    sx={{
                        textAlign: 'center',
                    }}>
                <Typography variant="h1"
                    sx={{
                        textAlign: 'center',

                    }}
                > Friskolen</Typography>

                    <Typography variant='h4'>Hos os foregår tingene anderledes end på en folkeskole, prøv at se en hverdag på vores lille skole!</Typography>
                </Stack>       
                         <img src={gif} className="gif-skole"  ></img>
            </Stack>
            
                <Dagligdag />
                        <Typography variant="h2" 
                        sx={{
                            textAlign: 'center',
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                        >Fag på Fusfri </Typography>
            <article className="scroll"> 

                {postIDs.map(postID => (
                    <div
                        key={postID}
                        className= 'fag-kort'
                    >
                       
                <WordPressFag postId={postID} />
            </div>
                ))}
        </article>
          
           
        </main >
    );
}
