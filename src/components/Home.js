import React from 'react';
import pfp from '../images/profile-picture-copy.jpg'
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
                <p style={{
                    fontSize: '50px',
                    padding: '30px',
                    color: '#b35b50',
                    fontWeight: 'bolder'}}>I'm Emma.</p>
                <Box style={{
                    // display: 'flex',
                    // flexDirection: 'column',
                    // margin: '20px',
                    // padding: '10px',
                    // textAlign: 'center',
                    // boxShadow: '2px 2px 20px #52414a',
                    // backgroundColor: 'transparent',
                    // borderRadius: '20px',
                }}>
                        <p style={{
                        fontSize: '28px',
                        padding: '30px',
                        color: '#cdcfd1',}}>Designer and developer who is always looking to make the digital experience accessible for everybody.</p>
                </Box>
                <Link to='/work'>Check out my work</Link>
            </Container>
            <div className='card-right'>
                <img src={pfp} alt='pale woman with long blue hair and brown eyes gazing at the camera'/>
            </div>
        </div>
    );
}