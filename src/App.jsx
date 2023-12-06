import { ThemeProvider, useTheme } from "@emotion/react"
import { CssBaseline } from "@mui/material";

import { myTheme } from "./components/theme";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import Nav from "./components/nav";
import Friskole from "./pages/friskole";

import './App.css'


function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={myTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/friskole" element={<Friskole />} />


        <Route path="*" element={<Navigate to="/" />} /* 404 */ />
      </Routes>

    </ThemeProvider>
  )
}

export default App
