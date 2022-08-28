import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components/index'

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme  = createTheme({
    palette:{
      mode:mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme }>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={{xs:0,sm:2}} justifyConten="space-between" sx={{marginTop:"60px"}}>
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add mode={mode} />
    </Box>
    </ThemeProvider>
  );
}

export default App;
