import React , { useState, } from 'react'
import { useSelector } from 'react-redux';
import { Box , Tabs ,Tab, Container, } from "@mui/material";
import Prices from './Prices/Prices';
import { API_KEY, CURRENCY_IDS, WEBSOCKET_URL,  } from '../../constants/configs';
import banner from '../../images/landing.jpg'
import Header from './../Header/Header';

function TabPanel({ children, value, index, ...other }) {
    return (
        value === index && (
          <Box 
          sx={{ py: 3 }}
          role="tabpanel"
          hidden={value !== index}
          {...other}
          >
            {children}
          </Box>
        )
    );
  }

const Home =()=>{
    const [tabs, setTabs] = useState(0);
    const handleChange = (event, newValue) => {setTabs(newValue);};
    const forex = useSelector(state=>state.forex)
    const crypto = useSelector(state=>state.crypto)
    const cryptoCurrncy = useSelector(state=>state.cryptoCurrncy)
  return (
    <Container>
      <Header />
      <Box component='main'>
        <Box>
          <img src={banner}  alt="bitcon banner" style={{objectFit:'cover',width:'100%',height:'20vh'}}/>
        </Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabs} onChange={handleChange}  centered>
            <Tab label="Forex"  />
            <Tab label="Crypto"  />
            <Tab label="Crypto Currency" />
          </Tabs>
        </Box>
        <TabPanel value={tabs} index={0}>
          <Prices apiKey={API_KEY} url={WEBSOCKET_URL} id={CURRENCY_IDS} info={forex}  name={'Forex'} />
        </TabPanel>
        <TabPanel value={tabs} index={1}>
          <Prices apiKey={API_KEY} url={WEBSOCKET_URL} id={CURRENCY_IDS} info={crypto}  name={'Crypto'} />
        </TabPanel>
        <TabPanel value={tabs} index={2}>
          <Prices apiKey={API_KEY} url={WEBSOCKET_URL} id={CURRENCY_IDS} info={cryptoCurrncy}  name={'Crypto Currency'} />
        </TabPanel>
      </Box>
    </Container>
  )
}
export default  Home