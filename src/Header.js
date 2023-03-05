import React from 'react';
import Nav from './components/Nav'

export default function Header () {
    return (
        <div className='Header'>
            <a href='/' className='logo'>E</a>
            <Nav />
        </div>
    )
}