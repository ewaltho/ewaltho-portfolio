import React from 'react';
import pfp from '../images/profile-picture.jpg'
import { Link } from 'react-router-dom'
import { Box, Container } from '@mui/material'
 
export default function Home() {
    return (
        <div className='Home'>
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px',
                    padding: '10px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 20px #2C1647',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                }}>
                    <p style={{
                        fontSize: '28px',
                        padding: '30px',}}>Hi, I'm Emma! Dedicated and creative UI/UX Designer. With a wide variety of design skills, I bring new perspectives to the UI/UX world.</p>
                </Box>
                <Link to='/work' style={{
                    fontSize: '35px',
                    color: 'black',
                    transition: 'ease-in-out 0.8s',
                    marginTop: '100px'
                }}>Click here to see my work</Link>
            </Container>
            <div className='card-right'>
                <img src={pfp} alt='pale woman with long blue hair and brown eyes gazing at the camera'/>
            </div>
        </div>
    );
}