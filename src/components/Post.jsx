import { MoreVert, FavoriteBorder, Favorite, Share } from '@mui/icons-material'
import { Checkbox, CardActions, Avatar, Card, CardHeader, IconButton, CardMedia, CardContent, Typography } from '@mui/material'

function Post() {
  return (
    <Card sx={{ margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>R</Avatar>
        }
        action={<IconButton aria-label='settings'><MoreVert /></IconButton>}
        title='John Doe'
        subheader='September 14, 2022'
      />
      <CardMedia
        component='img'
        height='194'
        image='https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post