import React , { useMemo, useEffect } from 'react'
import io from "socket.io-client";
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { useDispatch, } from 'react-redux';
import { setForexData, setForexSocket, } from '../../app/utils/forex';
import { setCryptoData, setCryptoSocket, } from '../../app/utils/crypto';
import { setCryptoCurrencySocket, setCryptoCurrencyData} from '../../app/utils/cryptoCurrney';
import ReactTable from './ReactTable';
const  Prices = ( { info, apiKey, id, url, name } )=>{
    const dispatch=useDispatch()
    const columns = useMemo( ()=>sample_columns,[])
    const temp = info.sample

    const  connectionHandler=()=>{
      setSocketData(name,{...info.data,status:'loading',message:'Loading...'})
      const socket = io(url,{
        path:'/v3/',
        transports: ['websocket']
      });
      socket.emit('heartbeat', apiKey); 
      // Connect Ids on server 
      socket.emit('real_time_join', id); 
      setSocket(name,socket)
    }
    const setSocket=(value,socket)=>{
      switch(value){
        case 'Forex': dispatch(setForexSocket(socket)); break;
        case 'Crypto Currency': dispatch(setCryptoCurrencySocket(socket)); break;
        case 'Crypto': dispatch(setCryptoSocket(socket)); break;
        default : return 0;
      }
    } 
    const setSocketData=(value,data)=>{
      switch(value){
        case 'Forex': dispatch(setForexData(data)); break;
        case 'Crypto Currency': dispatch(setCryptoCurrencyData(data)); break;
        case 'Crypto': dispatch(setCryptoData(data)); break;
        default : return 0;
      }
    } 

   
    const  disconnectHandler=()=>{
        console.log('ws', info.socket)
        info.socket.off('connect');
        info.socket.off('disconnect');
        info.socket.off('pong');
        setSocket(name,null)
        setSocketData(name,{payload:[],status:'disconnect',message:'Disconnect successfully at ' + new Date().toLocaleString()})
    }
    

    
    useEffect(() => {
      console.log(info)
          const ws= info.socket
          if(ws === null ) return;
          ws.on('successfully',(e)=>{
              console.log('successfully:',e)
              setSocketData(name,{payload:temp,status:'success',message:`Connect to ${name} successfully at ` + new Date().toLocaleString()})
          });
          // any log message from server will received here.
          ws.on('message',(message)=>{ console.log( "FCS SOCKET: " + message) });

          // connect error
          ws.on('connect_error',function(e){ console.log('connection error',e) });

          // receive data
          ws.on('data_received',function(data){ console.log('data:',data) });


          // ws.on("connect", () => {console.log('connect'); });
          ws.on("disconnect", (e) => {
            setSocketData(name,{payload:[],status:'disconnect',message:'Ops! something went wrong'})
          });   
    }, [info]);
    

    return (
      <>
        <Typography align='center' variant='h1' fontSize={'24px'} marginBottom={3}> { info.data.message }</Typography>
        <ReactTable  data={info.data.payload} status={info.data.status} message={info.data.message} columns={columns} />
        <Box  justifyContent={'center'}>
          <Button variant='contained' sx={{m:1}} onClick={()=>{ connectionHandler() }} disabled={ info.data.status === 'success'}> 
             { info.data.status === 'loading' ?  <CircularProgress color="inherit" size={25}/> : 'Start Connection' }
          </Button>
          <Button variant='contained' sx={{m:1}} onClick={()=>{ disconnectHandler() }} disabled={ info.data.status !== 'success'}  >
             { info.data.status === 'loading' ?  <CircularProgress color="inherit" size={25}/> : 'Disconnect' }
          </Button>
        </Box>
      </>
    )

}
export default Prices;



const sample_columns =[
  {
    Header: 'Name',
    accessor: 'Name', 
  },
  {
    Header: 'Last Close',
    accessor: 'LastClose',
  },
  {
    Header: 'Current',
    accessor: 'Current',
  },
  {
    Header: 'Ask',
    accessor: 'Ask',
  },
  {
    Header: 'Bid',
    accessor: 'Bid',
  },
  {
    Header: 'High',
    accessor: 'High',
  },
  {
    Header: 'Low',
    accessor: 'Low',
  },
  {
    Header: 'Change',
    accessor: 'Change',
  },
  {
    Header: 'Change%',
    accessor: 'Change_',
  },
  {
    Header: 'Spread',
    accessor: 'Spread',
  },
  {
    Header: 'Volume',
    accessor: 'Volume',
  },
  {
    Header: 'Time',
    accessor: 'Time',
  },
]
