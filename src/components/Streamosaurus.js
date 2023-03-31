import React from "react";
import { Box, Container } from '@mui/icons-material'
import streamosaurus from '../images/streamosaurus.png'
import mockup from '../images/streamosaurus_mockup.png'
import colors from '../images/streamosaurusColors.png'
import frame from '../images/streamosaurusFrame.png'
import icons from '../images/streamosaurusIcons.png'

export default function Streamosaurus() {
    return(
        <div>
            <div>
                <img className="mockupImg" src={mockup}
                style={{
                    width: '100%'
                }}></img>
                <div className="subtitle">
                    <h1>Streamosaurus</h1>
                    <p>Streaming search made simple</p>
                </div>
            </div>
            <div className="info-box" style={{background: '#17252A'}}>
                <div className="stats">
                    <div className="statTitle">
                        <p>Role</p>
                        <p>Timeframe</p>
                    </div>
                    <div className="statValues">
                        <p>UI/UX Designer, CSS Developer</p>
                        <p>1 week</p>
                    </div>
                </div>
                <div className="ps">
                    <div className="problem">
                        <h1>Problem</h1>
                        <p>Sometimes it’s hard to find where a movie is streaming. Not many websites exist that provide a streaming service for movies, and the ones that do are confusing to look at.</p>
                    </div>
                    <div className="solution">
                        <h1>Solution</h1>
                        <p>Creating a website that acts as a central hub with the dedicated function of finding where movies and shows are streaming, while also providing information about your query.</p>
                    </div>
                </div>
                <div className="philosophy">
                    <h1>Philosophy</h1>
                    <p>Simplicity was the number 1 priority with this design. Utilizing large font, a streamlined layout and contrasting colors. Starting from the top with a large search bar and then moving down to top trending with some critics reviews to give the user ideas if they can’t find what they want.</p>
                </div>
                <div className="elements">
                    <h1 style={{textAlign: 'center', margin: '15px'}}>Elements and Prototyping</h1>
                    <img src={colors} style={{width: '100%'}}></img>
                    <img src={icons} style={{width: '100%'}}></img>
                    <img src={frame} style={{width: '100%'}}></img>
                </div>
            </div>
        </div>
    )
}