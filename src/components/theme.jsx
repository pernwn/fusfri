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
                secondary:'#6E8C2E',
            },
        },
        typography: {
            fontFamily: 'Varela Round',
            h1: {
                fontFamily: 'Varela Round',
                color:'#6E8C2E',
            },
            h2: {
                fontFamily: 'Varela Round',
                color:'#6E8C2E',
                lineHeight:1,
            },
            h3: {
                fontFamily: 'Varela Round',
                color:'#6E8C2E',
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


