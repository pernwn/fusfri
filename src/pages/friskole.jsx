import WordPressFag from "../components/fag"; // Importerer WordPressFag-komponenten
import { Paper, Stack, Typography } from '@mui/material'; // Importerer Stack og Typography fra MUI-material
import '../styles/rin.css'; // Importerer stilark
import '../styles/responsive.css'; // Importerer responsivt stilark
import gif from '../assets/gifgif.gif'; // Importerer et GIF-billede
import Dagligdag from "../components/dagligdag"; // Importerer Dagligdag-komponenten

export default function Friskole() {
  // Definerer en array af postIDs
  const postIDs = [28, 191, 149, 177, 179, 181, 183, 185, 187, 189];

  return (
    <main>
      {/* En Stack-komponent med klasse 'friskole' */}
      <Stack className="friskole" 
       sx={{ color: (mytheme) => mytheme.palette.secondary.main, fontWeight: "bold" }}
      >
        {/* En Stack-komponent med typografiske elementer */}
        <Stack
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h1"
            sx={{
              textAlign: 'center',
              color: (mytheme) => mytheme.palette.secondary.main, 
              fontWeight: "bold" 
            }}
          > Friskolen</Typography>

          <Typography variant='h4'>Hos os foregår tingene anderledes end på en folkeskole, prøv at se en hverdag på vores lille skole!</Typography>     
          {/* Indsætter komponenten Dagligdag */}
      <Dagligdag />
        </Stack>
        {/* Et billede med src fra importerede gif */}
        <img src={gif} className="gif-skole" alt="GIF-skole" />
      </Stack>

 

      {/* Typografiske elementer for fag */}
      <Typography variant="h2" 
        sx={{
          textAlign: 'center',
          marginTop: 5,
        }}
      >Fag på Fusfri</Typography> 

      <Typography variant="h6" 
        sx={{
          textAlign: 'center',
          marginBottom: 5,
        }}
      >Se vores udvalg af fag her!  </Typography>

      {/* Render WordPressFag-komponenten for hver postID i postIDs arrayet */}
      <article className="scroll"> 
        {postIDs.map(postID => (
          <Paper elevation={5}
            key={postID}
            className='fag-kort'
            sx={{minWidth:"30em", height:"auto"}}
          >
            <WordPressFag postId={postID} />
          </Paper>
        ))}
      </article>
    </main >
  );
}
