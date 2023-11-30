
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import './App.css'
import { fusfriTheme } from './components/theme';

function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={(fusfriTheme(outerTheme))}>
      <CssBaseline enableColorScheme />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="*" element={<Navigate to="/" />} /* Denne føre til 404 */ />

      </Routes>

    </ThemeProvider>

  )
}

export default App
