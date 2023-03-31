import React from "react";
import {GitHub, LinkedIn} from '@mui/icons-material/'
import {Link} from 'react-router-dom'

export default function Footer () {
    return (
        <div className="footerBox" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: '10px'
        }}>
        <Link to='https://github.com/ewaltho' target='_blank'>
            <GitHub style={{
                color: '#b35b50',
                fontSize: '35'
            }}/>
        </Link>
        <Link to='https://www.linkedin.com/in/ewaltho/' target='_blank'>
            <LinkedIn style={{
                color: '#b35b50',
                fontSize: '35'
            }}/>
        </Link>
        </div>
    )
}