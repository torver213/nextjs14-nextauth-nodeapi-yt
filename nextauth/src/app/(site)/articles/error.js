'use client'
import { getErrorMessage } from '@/utils'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Error = ({error, reset}) => {
  return (
    <Fragment>
        <Container maxWidth="xl">
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh"}}>
                <Typography variant="h5">Oops something went wrong!</Typography>
                <Typography color="error">
                    {getErrorMessage(error)}
                </Typography>
                <Box sx={{mt: 2}}>
                    <Stack direction="row" spacing={2}>
                        <Button variant='outlined' color="error" onClick={() => reset()}>
                            Try again
                        </Button>
                        <Button variant='outlined' LinkComponent={Link} href="/" passHref>
                            Go back home
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    </Fragment>
  )
}

export default Error