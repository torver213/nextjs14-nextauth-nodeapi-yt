'use client'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const items = [
    {title: "Users", total: 10000},
    {title: "Articles", total: 200},
    {title: "Visitors", total: 2000},
    {title: "Authors", total: 700},
    {title: "Comments", total: 1500},
    {title: "Reactions", total: 1200},
    {title: "Videos", total: 150},
    {title: "Ads", total: 77},
]

const AdminDashboard = ({session}) => {
  return (
    <Box sx={{backgroundColor: theme => theme.palette.grey[300], minHeight: "100vh"}}>
        <Container maxWidth="xl">
            <Box sx={{pt: 10}}>
                    <Typography>
                        Admin Dashboard
                    </Typography>
                    <Typography>
                        Welcome <strong>{session?.user?.name}</strong>, <span>{session?.user?.role}</span>
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            items.map(item => (
                                <Grid item key={item.title} lg={3} md={6} sm={12} xs={12}>
                                    <Paper elevation={4} sx={{p: 3, m: 2}}>
                                        <Stack direction="column">
                                            <Typography variant='h5'>{item.title}</Typography>
                                            <Typography variant='body2'>{item.total}</Typography>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default AdminDashboard