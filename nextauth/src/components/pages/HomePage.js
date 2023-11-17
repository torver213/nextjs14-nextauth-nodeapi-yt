'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <Box sx={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
    }}>
        <Box sx={{height: "100vh", backgroundColor: 'rgba(0,0,0,0.5)'}}>

            <Box sx={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'column', height: "100vh"}}>

                <Image src="/logo-sm.png" alt="Logo" width={270} height={298} />


            <Typography variant='h2' sx={{fontFamily: "Play Fair", color: theme => theme.palette.common.white, p: 4}}>
                NextJs 14 Authentication & Role Based Authorisation Using NextAuth with Mongodb Adapter
            </Typography>
            </Box>

        </Box>
    </Box>
  )
}

export default HomePage