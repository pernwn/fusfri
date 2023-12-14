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
                    flexWrap: 'wrap',

                }}
            >
                <img src={gif} className="gif-skole"  ></img>

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
            
                <Dagligdag />
            
            <article className="scroll"> 
            <Typography variant="h2" >Fag</Typography>
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
