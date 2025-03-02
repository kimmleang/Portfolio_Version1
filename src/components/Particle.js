import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: {
          color: "#000",
          image:
            "radial-gradient(circle, rgba(0,0,40,1) 0%, rgba(9,9,121,1) 60%, rgba(0,212,255,0.6) 100%)",
          size: "cover",
          position: "50% 50%",
        },
        particles: {
          number: {
            value: 120,
            density: { enable: true, value_area: 1000 },
          },
          color: { value: ["#ffffff", "#ffcc00", "#99ccff"] }, // White, yellow, blue stars
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.2, sync: false },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.5 },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
