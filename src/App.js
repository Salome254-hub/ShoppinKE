import { useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';
import { Container } from '@mui/system';


function App() {
  useEffect(()=>{
    document.title="ShoppinKe";
  },[]);
  return(
    <Container maxWidth="xl" sx={{background:"#fff"}}>

      <Button>Test</Button>
    </Container>

    
  );
}

export default App;
