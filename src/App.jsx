import { ThemeProvider, useTheme } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { myTheme } from "./components/theme";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
//import Nav from "./components/nav";
import Friskole from "./pages/friskole";

import "./App.css";
import Kontakt from "./pages/kontakt";

import Calendar from "./pages/calender";
import Header from "./components/dropdown/header";

function App() {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={myTheme(outerTheme)}>
      <CssBaseline enableColorScheme />

      <Header/>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/friskole" element={<Friskole />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/information" element={<Calendar />} />

        <Route path="*" element={<Navigate to="/" />} /* 404 */ />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
