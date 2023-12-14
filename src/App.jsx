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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import CookiePrivat from "./pages/CookiePrivat";

function App() {
  const outerTheme = useTheme();

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={myTheme(outerTheme)}>
        <CssBaseline enableColorScheme />

        <Header />

        <Routes>
          <Route index element={<HomePage />} />
       
          <Route path="/omFus" element={""} />


          <Route path="/friskole" element={<Friskole />} />
          <Route path="/kontakt" element={<Kontakt/>} />
          <Route path="/information" element={<Calendar />} />


          <Route path="/cookieprivat" element={<CookiePrivat />} />

          <Route path="*" element={<Navigate to="/" />} /* 404 */ />
        </Routes>

        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
