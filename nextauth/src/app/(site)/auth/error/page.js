'use client'
import { Box, Container, Typography } from '@mui/material'
import React, { Fragment } from 'react'

const Page = ({params, searchParams}) => {
    const {error} = searchParams
  return (
    <Fragment>
        <Container maxWidth="xl">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh"}}>
                <Typography variant="h5">Oops something went wrong!</Typography>
                <Typography color="error">
                    {error}
                </Typography>
            </Box>
        </Container>
    </Fragment>
  )
}

export default Page