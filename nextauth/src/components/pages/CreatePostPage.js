'use client'
import { createNewPost } from '@/lib/post'
import { PostZodSchema } from '@/schema'
import { validateZodInput } from '@/validators'
import { Box, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const photos = ["/post1.jpg", "/post2.jpg", "/post3.jpg", "/post4.jpg", "/post5.jpg", "/post6.jpg", "/post7.jpg", "/post8.jpg", "/post9.jpg", "/post10.jpg"]

const getPhoto = () => {
    const randomNumber = Math.round(Math.random() * (photos.length - 1))
    return photos[randomNumber]
}

const initialState = { body: {title: "", description: "", content: ""}, message: "", isLoading: false}

const CreatePostPage = ({session}) => {
    const [state, setState] = useState(initialState)

    const handleInputChange = event => {
        setState(prev => ({...prev, message: "", body: {...prev.body, [event.target.name]: event.target.value}}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const photo = getPhoto()
            const parsedResult = validateZodInput({...state.body, photo}, PostZodSchema )
            if(parsedResult.isError) return setState(prev => ({...prev, message: parsedResult.message, }))
            setState(prev => ({...prev, isLoading: true}))
            const result = await createNewPost(parsedResult.data, session?.accessToken)
            if(!result.isError) return setState(() => ({...initialState, isLoading: false, message: result.message}))
            setState(prev => ({...prev, isLoading: false, message: result.message}))
        } catch (error) {
            setState(prev => ({...prev, isLoading: false, message: error.message}))
        
        }
    }


  return (
    <Box sx={{backgroundColor: theme => theme.palette.grey[300], height: "100vh"}}>
            <Container maxWidth="xl">
                <Box sx={{mx: 2}}>
                    <Typography variant='h3' sx={{textAlign: "center"}}>Create New Post</Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={8} sx={{margin: "0 auto"}}>
                            <Paper sx={{p: 3}}>
                                <Box>
                                    <Box sx={{my: 3}}>
                                        <TextField fullWidth id="title" name="title" label="Post Title" value={state.body.title} onChange={handleInputChange} />
                                    </Box>
                                    <Box sx={{my: 3}}>
                                        <TextField fullWidth id="description" name="description" label="Post Description" value={state.body.description} onChange={handleInputChange} />
                                    </Box>
                                    <Box sx={{my: 3}}>
                                        <TextField fullWidth id="content" name="content" label="Post Content" value={state.body.content} onChange={handleInputChange} multiline minRows={10} maxRows={12} />
                                    </Box>
                                    <Box sx={{my: 3}}>
                                        <Typography color="error" sx={{whiteSpace: "pre-wrap"}}>
                                            {state.message && state.message}
                                        </Typography>
                                    </Box>
                                    <Box sx={{textAlign: "center", my: 3}}>
                                            <Button 
                                                disabled={state.isLoading} 
                                                onClick={(ev) => handleSubmit(ev)}
                                                variant='contained'
                                                sx={{width: 200, borderRadius: 30}}
                                                startIcon={state.isLoading  && <CircularProgress size={20} sx={{color: theme => theme.palette.common.white}} />}
                                                 >
                                            Submit</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    </Box>
  )
}

export default CreatePostPage