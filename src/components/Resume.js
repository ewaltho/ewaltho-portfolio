import React from 'react';
import { Container, Box } from '@mui/material'

export default function Resume() {
    return (
        <div className='Resume'>
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <Box style={{
                    margin: '10px',
                    padding: '15px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 20px #52414a',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',

                }}>
                    <h1 style={{color: '#b35b50'}}>Design Skills</h1>
                    <ul style={{
                        listStyle: 'none'
                    }}>
                        <li>Prototyping and wireframing</li>
                        <li>Design software fluency</li>
                        <li>Problem solving</li>
                        <li>Curiosity to learn</li>
                        <li>Collaborative and communicative</li>
                    </ul>
                </Box>
                <Box style={{
                    margin: '10px',
                    marginTop: '20px',
                    padding: '15px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 20px #52414a',
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                }}>
                    <h1 style={{color: '#b35b50'}}>Technical Skills</h1>
                    <ul style={{
                        listStyle: 'none'
                    }}>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Figma</li>
                        <li>Procreate</li>
                    </ul>
                </Box>
                <a href='EmmaWaltho.pdf' download style={{
                    fontSize: '20px',
                    margin: '15px',
                    color: '#b35b50'
                }}>Download my Résumé
                </a>
            </Container>

        </div>
    )
}