import React from 'react';
import pfp from '../images/about-image-copy.jpg'
import { Box, Container } from '@mui/material'
 
export default function About() {
    return (
        <div className='About'>
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box style={{
                    // margin: '20px',
                    // padding: '10px',
                    textAlign: 'center',
                    // boxShadow: '2px 2px 20px #52414a',
                    // backgroundColor: 'transparent',
                    // borderRadius: '20px',

                }}>
                    <p style={{
                        fontSize: '25px',
                        padding: '10px',
                        color: '#cdcfd1'}} className="bio">A budding UI/UX Designer coming from being a freelance artist for almost 6 years. Based out of the Seattle area, I have an eye for the aesthetic and am not afraid of the less mainstream concepts. I have led the design on many projects and have produced my own as well. Outside of work I enjoy playing video games, horseback riding and playing Dungeons and Dragons.</p>
                </Box>
            </Container>
            <div className='card-right'>
                <img src={pfp} alt='woman from home page in a red shirt and tan pants smiling while riding a golden horse.'/>
            </div>
        </div>
    );
}