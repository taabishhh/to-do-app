const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: false,
        value_area: 500,
      },
    },
    color: {
      value: "#7E8287",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 3,
        color: "#7E8287",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 19.439022217182483,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#7E8287",
      opacity: 0.5837664934026392,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 0.1,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      push: {
        particles_nb: 1,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
