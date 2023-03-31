import React from "react";
import { Box, Container } from '@mui/material'
import streamosaurus from '../images/streamosaurus.png'
import wildthorn from '../images/wildthorn.png'
import pennypics from '../images/penny-pics.png'
import cattention from '../images/cattention.png'
import {Link} from 'react-router-dom'

export default function Work() {
    return(
        <div>
            <div className="workBox">
                <img src={streamosaurus}></img>
                <div className="infoBox">
                    <div className="descBox">
                        <h2 style={{color: 'white'}}>Streamosaurus</h2>
                        <p>Streamosaurus is a simple to use app to find where your favorite movies and TV shows are streaming.</p>
                    </div>
                    <Link className='contactBtn learnBtn' to='/streamosaurus'>Learn More</Link>
                </div>
            </div>
            <div className="workBox">
                <img src={wildthorn}></img>
                <div className="infoBox">
                    <div className="descBox">
                        <h2 style={{color: 'white'}}>Wild Thorn Apothecary</h2>
                        <p>Wild Thorn Apothecary is an online garden to plan your own apothecary garden.</p>
                    </div>
                    <Link className='contactBtn learnBtn' to='/streamosaurus'>Learn More</Link>
                </div>
            </div>
            <div className="workBox">
                <img src={cattention}></img>
                <div className="infoBox">
                    <div className="descBox">
                        <h2 style={{color: 'white'}}>CATtention</h2>
                        <p>An ADHD friendly app to help those with ADHD to study or work in an efficient and fun way.</p>
                    </div>
                    <Link className='contactBtn learnBtn' to='/streamosaurus'>Learn More</Link>
                </div>
            </div>
            <div className="workBox">
                <img src={pennypics}></img>
                <div className="infoBox">
                    <div className="descBox">
                        <h2 style={{color: 'white'}}>Penny Pics</h2>
                        <p>Penny Pics is a simple and interactive photo gallery of my adorable dog Penny.</p>
                    </div>
                    <Link className='contactBtn learnBtn' to='/streamosaurus'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}