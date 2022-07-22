import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { red } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: "#11cb5f",
      },
      white: {
        main: "#ffffff",
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
