import { useEffect } from 'react';
import './App.css';
import { Button, Container } from '@mui/material';
import theme from './styles/theme';
import {ThemeProvider} from "@mui/material";


function App() {
  useEffect(()=>{
    document.title="ShoppinKe";
  },[]);
  return(
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background:"#fff"}}>

      <Button variant='contained'>Test</Button>
      </Container>

    </ThemeProvider>
    

    
  );
}

export default App;
