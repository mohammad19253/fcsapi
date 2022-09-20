import Home from "./components/Home/Home";
import {  Container, Box, Typography, } from "@mui/material";
import logo from './images/logo.png'
import banner from './images/landing.jpg'
function App() {
  return (
    <Container>
      <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center',p:1,}}>
        <img src={logo} alt="company logo" width={35} />
        <Typography varient='h1' textAlign={'center'} fontWeight={'bold'} p={1}>FCA api</Typography>
      </Box>
      <main>
        <Box>
          <img src={banner}  alt="bitcon banner" style={{objectFit:'cover',width:'100%',height:'30vh'}}/>
        </Box>
        <Home />
      </main>
    </Container>
  );
}

export default App;
