import React from 'react'
import { Box, Typography } from "@mui/material";
import { HiHome as HomeIcon } from "react-icons/hi";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Box component='header' sx={{display:'flex',justifyContent:'space-between', alignItems:'center',p:1,}}>
        <Link  to="/" > <Typography varient='h1' textAlign={'center'} fontWeight={'bold'} p={1}>Company Logo</Typography> </Link>
        <Link  to="/" > <HomeIcon /> </Link>
  </Box>
  )
}

export default Header