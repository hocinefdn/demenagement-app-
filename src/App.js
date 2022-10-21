import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription"
import { red, green } from "@mui/material/colors";
import Estimation from "./pages/Estimation";
import SignIn from "./pages/connnexxion";
import { prixContext } from "./contextprix/context";
import { useState } from "react";
function App() {
 
const [x,setx]= useState({
 prixChambre:0,
 prixSalon:0,
 prixCuisine:0,
 prixAutre:0,
prixMeuble:0,
})
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: green[500],
      },
      white: {
        main: "#ffffff",
      },
      text: {
        white: "#ffffff",
      },
    },
  });
  return (
    <div className="App">
<prixContext.Provider value={{...x,setx}}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<SignIn />} />
          
          <Route path="/inscription" element={<Inscription />} />
        
          <Route path="/estimation" element={<Estimation />} />
         
        
        </Routes>
      </ThemeProvider>
      </prixContext.Provider>
    </div>
  );
}

export default App;
