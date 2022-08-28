import { Avatar,Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Grid, IconButton,Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React from 'react'

const Feed = () => {
    const data = [1,2,3,4,5,6,7,8,9];
  return (
    <Box flex={4} p={{ xs:0,md:2 }}>
        <Grid container>
        {data.map((item)=>(
                <Grid item xs={12} lg={6}>
                    <Card sx={{margin:2}}>
                <CardHeader avatar={<Avatar  aria-label="recipe">R</Avatar>}
                    action={ <IconButton aria-label="settings"> <MoreVert /> </IconButton>}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                        />
                        </IconButton>
                        <IconButton aria-label="share">
                        <Share />
                        </IconButton>
                    </CardActions>
                 </Card>
                </Grid>
        ))}
        </Grid>
    </Box>
  )
}

export default Feed