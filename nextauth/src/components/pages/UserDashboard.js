'use client'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const items = [
    {title: "Followers", total: 10000},
    {title: "Following", total: 1400},
    {title: "Comments", total: 760},
    {title: "Likes", total: 1350}
]

const UserDashboard = ({session}) => {
  return (
    <Box sx={{backgroundColor: theme => theme.palette.grey[300], height: "100vh"}}>
<Container maxWidth="xl">
            <Box sx={{pt: 2}}>
                    <Typography>
                        User Dashboard
                    </Typography>
                    <Typography>
                        Welcome <strong>{session?.user?.name}</strong>, <span>{session?.user?.role}</span>
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            items.map(item => (
                                <Grid item key={item.title} lg={3}>
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

export default UserDashboard