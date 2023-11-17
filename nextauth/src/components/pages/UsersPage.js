'use client'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import UsersTable from '../atoms/UsersTable'



const UsersPage = ({users}) => {
  return (
    <Box sx={{backgroundColor: theme => theme.palette.grey[300], height: "100vh"}}>
        <Container maxWidth="xl">
        <Typography sx={{fontFamily: "Play Fair", textAlign: "center", py: 3}} variant='h4'>All Users</Typography>
        <UsersTable users={users} />
        </Container>
    </Box>
  )
}

export default UsersPage