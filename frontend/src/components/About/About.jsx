import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';
// import logo from "../../images/logo.jpeg";

function About({ about }) {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography>{about.quote}</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src={about.avatar.url} alt='KK' className='aboutAvatar'/>
                {about.name}
                <Typography variant='h4' 
                style={{margin:"1vamx 0",color:"black"}}>{about.title}</Typography>
                <Typography style={{margin:"1vamx 0",color:"black",textAlign:"center"}}>{about.subtitle}</Typography>
                {/* <Typography>I am a Student</Typography> */}
            </div>
            <div>
                <Typography style={{
                    wordSpacing:"5px",
                    lineHeight:"50px",
                    letterSpacing:"5px",
                    textAlign:"right",
                      
                }
        }>{about.description}

                </Typography>
            </div>
        </div>
      
    </div>
  )
}

export default About
