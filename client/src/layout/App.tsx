import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../features/catalog/Catalog";
import Header from "./Header";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const parletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: parletteType,
      background: {
        default: parletteType === "light"? "#eaeaea" : "#121212"
      }
    }
  })

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
}
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
      <Catalog />
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
