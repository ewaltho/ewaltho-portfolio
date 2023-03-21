import React, { useState } from 'react';
import { Container, Box } from "@mui/material"

export default function Contact() {
    const [inputs, setInputs] = useState({});

    
    const handleChange = (event) => {
        const email = event.target.email;
        const name = event.target.name;
        const message = event.target.message;
        const value = event.target.value;
        setInputs(values => ({ ...values, [email]: value, [name]: value, [message]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    
    const FORM_ENDPOINT = "https://public.herotofu.com/v1/64f2b680-c7a6-11ed-9be6-3704017c4748"
    
    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form className='Contact' style={{
                                    margin: '20px',
                                    padding: '30px',
                                    textAlign: 'center',
                                    boxShadow: '2px 2px 20px #52414a',
                                    backgroundColor: 'transparent',
                                    borderRadius: '20px',
                                    width: '90vw'
            }}>
                <Box style={{margin: '20px'}}>
                    <label style={{fontSize: '20px', textAlign: 'center',display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#cdcfd1'}}>
                        Email:
                        <input className='form' type='text' name='email' value={inputs.email || ""} onChange={handleChange} />
                    </label>
                </Box>
                <Box style={{margin: '20px'}}>
                    <label style={{fontSize: '20px', display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#cdcfd1'}}>
                        Name:
                        <input className='form' type='text' name='name' value={inputs.name || ""} onChange={handleChange} />
                    </label>
                </Box>
                <Box style={{margin: '20px'}}>
                    <label style={{fontSize: '20px', display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#cdcfd1'}}>
                        Message:
                        <textarea value={inputs.message || ""} onChange={handleChange} name='message'/>
                    </label>
                </Box>
                <input className='button' type='submit' value='Submit' onChange={handleSubmit}
                style={{
                    border: 'none',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: '2px 2px 20px #2C1647',
                    fontSize: '18px',
                    background: '#eef2faa8'}}/>
            </form>
        </Container>
    )
}