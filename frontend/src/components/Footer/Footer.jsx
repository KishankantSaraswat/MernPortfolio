import React from 'react'
import "./Footer.css";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsCodeSlash , BsFileEarmarkText  } from "react-icons/bs"

function Footer() {
  return (
    <div className='footer'>
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
            Krishankant Saraswat - Software Developer | Crafting Innovative Solutions for a Digital Tomorrow 🚀
            </Typography>

            <Link to="/contact" className="footerContactBtn">
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href='https://github.com/KishankantSaraswat' target='blank'>
                <BsGithub/>
            </a>
            <a href='https://youtube.com/@KrishnaLogicLabs?si=YUOS4VyEqByUAFOV ' target='blank'>
                <BsYoutube/>
            </a>
            <a href='https://www.linkedin.com/in/krishnkantsaraswat830/' target='blank'>
                <BsLinkedin/>
            </a>
            <a href='https://www.instagram.com/krishankant_saraswat?igsh=MTV0aDBiam1qa2czeg== ' target='blank'>
                <BsInstagram/>
            </a>
            <a href='https://leetcode.com/krishankant_2003/' target='blank'>
               <BsCodeSlash />
            </a>
            <a href='https://drive.google.com/file/d/1T3E66bRFtVrulfkyyc8hRkyXeQHCnEue/view?usp=sharing' target='blank'>
               < BsFileEarmarkText  />
            </a>
        </div>
      
    </div>
  )
}

export default Footer
