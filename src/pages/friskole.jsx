import { ThemeProvider, Typography } from "@mui/material";
import WordPressFag from "../components/fag";


export default function Friskole() {
    return( 
        <ThemeProvider>
            <Typography variant="h1">Hej</Typography>

            <WordPressFag/>



            
        </ThemeProvider>
    )
}