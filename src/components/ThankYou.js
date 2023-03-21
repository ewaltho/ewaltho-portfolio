import React from 'react';
import { Box, Container } from '@mui/material'
 
export default function ThankYou() {
    return (
        <div className='ThankYou'>
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box style={{
                    margin: '20px',
                    padding: '10px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 20px #52414a',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',

                }}>
                    <p style={{
                        fontSize: '25px',
                        padding: '30px',
                        color: '#cdcfd1'}} className="bio">Your email has been sent. I will contact you within 3-5 days. Thank you!</p>
                </Box>
            </Container>
        </div>
    );
}