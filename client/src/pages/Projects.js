import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './Projects.css'


export default function Projects() {

  return (
      <>
    <Box sx={{ mx: "auto", textAlign: 'center', marginBottom: 10, marginTop: 10, marginLeft:10, marginRight:10}}>
        <h3>My Projects</h3>
        <Stack direction="row" justifyContent="center"
        alignItems="center" spacing={4}>
            <Card sx={{ maxWidth: 345, marginTop: 10}}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://ik.imagekit.io/txvpianbu38/Custom_Size___1_2x_yehVUqSSM.png?updatedAt=1642067250786"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    BeforeBuy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Before Buy is a market place to buy games.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Tech used: Midtrans, Vue JS, image kit, bcrypt, postgreSQL
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                    <a href='https://games-vue-b7eae.web.app/' target="_blank">Visit</a>
                    </Button>
                </CardActions>
            </Card> 
        </Stack>
        <Stack direction="row" justifyContent="center"
        alignItems="center" spacing={4}>
            <Card sx={{ maxWidth: 345, marginTop: 10}}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://ik.imagekit.io/txvpianbu38/6b095d9ce6254c358aca023633f45168_QcizSV6K9M.png?updatedAt=1642069646317"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kintaku client web
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Kintaku for client side.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Tech used: Vue JS, image kit, bcrypt, postgreSQL
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                    <a href='https://kintaku-f1774.web.app/' target="_blank">Visit</a>
                    </Button>
                </CardActions>
            </Card> 
        </Stack>
        <Stack direction="row" justifyContent="center"
        alignItems="center" spacing={4}>
        <Card sx={{ maxWidth: 345, marginTop: 10}}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://ik.imagekit.io/txvpianbu38/79b79188b8d44236beee894da5399b5b_r3WQHY9F9Uo.png?updatedAt=1642069596092"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kintaku restaurant cms
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Kintaku is cms for restaurant.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Tech used: Vue JS, image kit, bcrypt, postgreSQL
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                    <a href='https://kintaku-admin-cms.web.app/' target="_blank">Visit</a>
                    </Button>
                </CardActions>
            </Card> 
            </Stack>
    </Box>
    </>
  );
}
