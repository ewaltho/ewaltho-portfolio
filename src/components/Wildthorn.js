import React from "react";
import streamosaurus from '../images/streamosaurus.png'
import mockup from '../images/wildthornMockup.png'
import colors from '../images/wildthornColors.png'
import frame from '../images/wildthornFrame.png'
import icons from '../images/wildthornFigma.png'
import LaunchIcon from '@mui/icons-material/Launch'

export default function Wildthorn() {
    return(
        <div>
            <div>
                <img className="mockupImg" src={mockup}
                style={{
                    width: '100%'
                }}></img>
                <div className="subtitle">
                    <div>
                        <h1>Wild Thorn Apothecary</h1>
                        <p>Your digital apothecary garden.</p>
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
                        <p>UI/UX Designer, CSS Developer</p>
                        <p>1 week</p>
                    </div>
                </div>
                <div className="ps">
                    <div className="problem">
                        <h1>Problem</h1>
                        <p>Beginners to holistic remedies and gardening are often lost when they start their garden. With so many plants to chose from, it becomes a struggle.</p>
                    </div>
                    <div className="solution">
                        <h1>Solution</h1>
                        <p>Saving you trips to the garden section, this app provides you with a custom pre-planned garden which includes your chosen plants along with information about climate, ailments and more.</p>
                    </div>
                </div>
                <div className="philosophy">
                    <h1>Philosophy</h1>
                    <p>From the start, we wanted something that felt like a cottage in the woods. The handwriting font gives it a classic feel. The sketch-like font preserving the classic feel while also being more easily legible. The colors stayed soft and welcoming like you're in a garden. Utilizing an alternating card layout, it gives the layout more balance.</p>
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