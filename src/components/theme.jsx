import { createTheme } from "@mui/material";


export const myTheme = (outerTheme) => 
    createTheme({
        mode: outerTheme,
        palette: {
            mode: 'light',
            primary: {
                main: '#6E8C2E',
            },
            secondary: {
                main: '#3D7F8C',
            },
            background: {
                default: '#D7E8ED',
                paper: '#eef6f7',
            },
            text: {
                primary: '#734434',
            },
        },
        typography: {
            fontFamily: 'Ubuntu',
            h1: {
                fontFamily: 'Varela Round',
            },
            h2: {
                fontFamily: 'Varela Round',
            },
            h3: {
                fontFamily: 'Varela Round',
            },
            h4: {
                fontFamily: 'Varela Round',
            },
            h5: {
                fontFamily: 'Varela Round',
            },
            h6: {
                fontFamily: 'Varela Round',
            },
            button: {
                fontFamily: 'Varela Round',
            },
        },
        shape: {
            borderRadius: 8,
        },
    })


