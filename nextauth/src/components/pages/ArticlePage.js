import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PostCard from '../atoms/PostCard'

const ArticlePage = ({title, posts}) => {
  return (
    <Container maxWidth="xl">
        <Box sx={{my: 2}}>
            <Typography sx={{textAlign: 'center'}} variant='h3'>{title}</Typography>
            <Grid container spacing={2}>
                {
                    posts.map(post =>(
                    <Grid item key={post.title} lg={4}>
                        <PostCard post={post} />
                    </Grid>))
                }
            </Grid>
        </Box>
    </Container>
  )
}

export default ArticlePage