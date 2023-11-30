
import { Box, CssBaseline, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

import './App.css'

import Homepage from './pages/homepage';
import Nav from './components/nav';

import customTheme from "./components/theme.jsx";



function App() {
const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Typography variant='h1'>Hello</Typography>
      
      <Box>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="*" element={<Navigate to="/" />} /* Denne fører til 404 */ />

        </Routes>

      </Box>


    </ThemeProvider>

  )
}

export default App
