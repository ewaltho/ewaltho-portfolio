import React from "react";
import streamosaurus from '../images/streamosaurus.png'
import mockup from '../images/cattentionMockup.png'
import colors from '../images/cattentionColors.png'
import frame from '../images/cattentionFrame.png'
import icons from '../images/cattentionFigma.png'
import LaunchIcon from '@mui/icons-material/Launch'

export default function Cattention() {
    return(
        <div>
            <div>
                <img className="mockupImg" src={mockup}
                style={{
                    width: '100%'
                }}></img>
                <div className="subtitle">
                    <div>
                        <h1>CATtention</h1>
                        <p>Cat themed ADHD productivity app</p>
                    </div>
                    {/* <LaunchIcon style={{
                        marginLeft: '100px'
                    }}></LaunchIcon> */}
                </div>
            </div>
            <div className="info-box" style={{background: '#17252A'}}>
                <div className="stats">
                    <div className="statTitle">
                        <p>Role</p>
                        <p>Timeframe</p>
                    </div>
                    <div className="statValues">
                        <p>UI/UX Designer, CSS and React Developer</p>
                        <p>2 weeks</p>
                    </div>
                </div>
                <div className="ps">
                    <div className="problem">
                        <h1>Problem</h1>
                        <p>People with ADHD have trouble staying on task. There are many apps out there developed for people with ADHD, however they are not very helpful and oftentimes are a distraction or even a stressor.</p>
                    </div>
                    <div className="solution">
                        <h1>Solution</h1>
                        <p>CATtention not only utilizes the pomodoro technique but also a reward system to keep users on task. Users will complete minigames to earn badges to personalize their own profiles and motivate them.</p>
                    </div>
                </div>
                <div className="philosophy">
                    <h1>Philosophy</h1>
                    <p>From an ADHD perspective, apps that have too much going on are an immediate no-go. We knew we wanted to keep the design easy to read and quiet. Too busy of a layout would turn away users. Utilizing soft colors and even a dark mode, we kept the design super simple. Large buttons, simple font, high contrast with buttons and text. All these components came together to make a very quiet design.</p>
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