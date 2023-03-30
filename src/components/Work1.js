import React from 'react';
import { Card, CardMedia, Button, Typography, CardContent, CardActions } from '@mui/material';
import streamosaurus from '../images/streamosaurus.png'
import wildthorn from '../images/wildthorn.png'
import pennypics from '../images/penny-pics.png'
import cattention from '../images/cattention.jpg'

export default function Work1() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <Card sx={{maxWidth: 500, margin: '10px', boxShadow: '2px 2px 20px #2C1647'}}>
                <CardMedia sx={{height:300}}
                image={streamosaurus}
                title='streamosaurus'/>
                <CardContent style={{background: '#b35b50', color: 'white'}}>
                    <Typography gutterBottom variant='h5'>Streamosaurus</Typography>
                    <Typography variant='body2' color='#cdcfd1'>
                        Streamosaurus is a simple to use app to find where your favorite movies and TV shows are streaming.
                    </Typography>
                </CardContent>
                <CardActions style={{background: '#b35b50'}}>
                    <Button size='small' href='https://wabarringer.github.io/project-1/' target='_blank'>Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{maxWidth: 500, margin: '10px', boxShadow: '2px 2px 20px #2C1647'}}>
            <CardMedia sx={{height:300}}
            image={wildthorn}
            title='wildthorn apothecary'/>
            <CardContent style={{background: '#fcd5ea'}}>
                <Typography gutterBottom variant='h5'>Wild Thorn Apothecary</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Wild Thorn Apothecary is an online garden to plan your own apothecary garden.
                </Typography>
            </CardContent>
            <CardActions style={{background: '#fcd5ea'}}>
                <Button size='small' href='https://wildthornapothecary.herokuapp.com/' target='_blank'>Learn More</Button>
            </CardActions>
            </Card>

            <Card sx={{maxWidth: 500, margin: '10px', boxShadow: '2px 2px 20px #2C1647'}}>
            <CardMedia sx={{height:300}}
            image={pennypics}
            title='penny pics'/>
            <CardContent style={{background: '#fcd5ea'}}>
                <Typography gutterBottom variant='h5'>Penny Pics</Typography>
                <Typography variant='body2' color='text.secondary'>
                    Penny Pics is a simple and interactive photo gallery of my adorable dog Penny.
                </Typography>
            </CardContent>
            <CardActions style={{background: '#fcd5ea'}}>
                <Button size='small' href='https://ewaltho.github.io/penny-pics/' target='_blank'>Learn More</Button>
            </CardActions>
            </Card>

            <Card sx={{maxWidth: 500, margin: '10px', boxShadow: '2px 2px 20px #2C1647'}}>
            <CardMedia sx={{height:300}}
            image={cattention}
            title='cattention'/>
            <CardContent style={{background: '#fcd5ea'}}>
                <Typography gutterBottom variant='h5'>CATtention</Typography>
                <Typography variant='body2' color='text.secondary'>
                    An ADHD friendly app to help those with ADHD to study or work in an efficient and fun way.
                </Typography>
            </CardContent>
            <CardActions style={{background: '#fcd5ea'}}>
                <Button size='small' href='https://cattention.netlify.app/' target='_blank'>Learn More</Button>
            </CardActions>
            </Card>
        </div>
    )
}