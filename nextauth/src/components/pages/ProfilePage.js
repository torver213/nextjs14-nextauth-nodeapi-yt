'use client'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const ProfilePage = ({session}) => {
  return (
    <Box sx={{backgroundColor: theme => theme.palette.grey[300], height: "100vh"}}>
        <Box sx={{mx: 2, pt: 8}}>
        <Typography sx={{fontFamily: "Play Fair", textAlign: "center", py: 3}} variant='h4'>My Profile</Typography>
            <Paper sx={{width: 400, p: 2, maxWidth: "100%", margin: "0 auto"}}>
                    <Stack direction="row" sx={{alignItems: "center"}} spacing={2}>
                        <Typography variant='h6'>Name: </Typography>
                        <Typography>{session?.user?.name}</Typography>

                    </Stack>
                    <Stack direction="row" sx={{alignItems: "center"}} spacing={2}>
                        <Typography variant='h6'>Email: </Typography>
                        <Typography>{session?.user?.email}</Typography>

                    </Stack>
                    <Stack direction="row" sx={{alignItems: "center"}} spacing={2}>
                        <Typography variant='h6'>Role: </Typography>
                        <Typography>{session?.user?.role}</Typography>

                    </Stack>
            </Paper>
        </Box>
    </Box>
  )
}

export default ProfilePage