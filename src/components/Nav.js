import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className='Nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </div>
    )
}