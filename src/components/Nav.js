import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className='Nav'>
            {/* <Link to="/">Home</Link> */}
            <Link className='navBtn' to="/about">About</Link>
            <Link className='navBtn' to="/work">Work</Link>
            <Link className='navBtn' to="/resume">Résumé</Link>
            <Link className='contactBtn' to="mailto:ejwaltho@gmail.com">Contact</Link>
        </div>
    )
}