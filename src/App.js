import { useEffect } from 'react';
import './App.css';
import {Container } from '@mui/material';
import theme from './styles/theme';
import {ThemeProvider} from "@mui/material"
import Appbar from "./components/appbar/index"
import Banner from './components/banner';
function App() {
  useEffect(()=>{
    document.title="ShoppinKe";
  },[]);
  return(
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background:"#fff"}}>
        <Appbar />
        <Banner />
      
      </Container>

    </ThemeProvider>
    

    
  );
}

export default App;
