import { useEffect } from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import theme from './styles/theme';
import {ThemeProvider} from "@mui/material"
import Appbar from "./components/appbar/index"
function App() {
  useEffect(()=>{
    document.title="ShoppinKe";
  },[]);
  return(
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background:"#fff"}}>
        <Appbar />

      <Button variant='contained'>Test</Button>
      </Container>

    </ThemeProvider>
    

    
  );
}

export default App;
