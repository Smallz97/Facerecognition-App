import React, { useState } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imageLinkForm/imagelinkform';



const particlesOptions = {
  background: {
    color: {
      value: "#161B36",
    },
  },
  fpsLimit: 20,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#FFFF00",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
      enable: true,
      area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const App = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
 
  return (
    <div className='App'>
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {<FaceRecognition />} */}
    </div>
  );
}

export default App;