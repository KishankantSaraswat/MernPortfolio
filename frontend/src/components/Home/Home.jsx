import React, { useEffect } from 'react';
import * as THREE from 'three';
import './Home.css';
import moonImage from '../../images/moon2.jpg';
import venusImage from '../../images/venus.jpg';
import spaceImage from '../../images/space.jpeg';
import { Typography } from '@mui/material';
import TimeLine from '../../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { DiJava,DiPython   } from 'react-icons/di';
// import { YouTube } from '@mui/icons-material';
// import YouTube from '../Youtube/Youtube';
import Youtube from '../Youtube/Youtube';
import {  MouseOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import Youtube from '../Youtube/Youtube';
// import YoutubeCard from 'F:\MY-PROJECTS\Portfolio using MERN\frontend\YoutubeCard\YoutubeCard.jsx';

// import YoutubeCard from '../../YoutubeCard/YoutubeCard';
// import YoutubeCard from '../../components/YoutubeCard/YoutubeCard';

// import YoutubeCard from '../../YoutubeCard/YoutubeCard';



function Home({timelines,youtubes,skills}) {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('.homeCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(pointLight);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    venus.position.set(8, 5, 5);
    camera.position.set(4, 4, 8);

    const constSpeed = 0.01;
    window.addEventListener('mousemove', (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.y += window.scrollY * 0.001;
      camera.rotation.z += window.scrollY * 0.003;

      // const skillsBox = document.getElementById("homeSkillsBox");
      const skillsBox = document.getElementsByClassName("homeSkillsBox")[0];

      // console.log(skillsBox); // Check what skillsBox is

      if (window.scrollY>1500) {
        skillsBox.style.animationName="homeSkillsBoxAnimationOn"
      } else {
        skillsBox.style.animationName="homeSkillsBoxAnimationOff"

      }

    });
  }, []);

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p >K</p>
          <p>R</p>
          <p>I</p>
          <p>S</p>
          <p>H</p>
          <p>A</p>
          <p>N</p>
          <p>K</p>
          <p>A</p>
          <p>N</p>
          <p>T</p>
        </Typography>
        

        <Link to="/project">VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines}/>
      </div>

      <div className="homeSkills">
        <Typography variant='h3'>SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt='Face1' />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt='Face2' />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt='Face3' />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt='Face4' />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt='Face5' />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url}alt='Face6' />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeSkillsBox">
          <DiPython />
          <DiJava   />
          <SiHtml5/>
          <SiCss3/>
          <SiJavascript/>
          <SiMongodb/>
          <SiExpress/>
          <SiReact/>
          <SiNodedotjs/>
          <SiThreedotjs/>
        </div>

         
        </div>

        <div className="homeYoutube">
          <Typography variant='h3'>YOUTUBE VIDEOS</Typography>

          <div className="homeYoutubeWrapper">
            {
              youtubes.map(item=>(
                <Youtube 
                image={item.image.url} title={item.title} url={item.url} id={item._id} key={item._id}
                />
              ))
            }
            
          </div>
        </div>

        
    </div>
  );
}

export default Home;
