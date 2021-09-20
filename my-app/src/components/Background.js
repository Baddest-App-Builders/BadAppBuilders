import React from "react";
import Particles from "react-particles-js";
// import "./styles.css";

export default function Background() {
  return (
    <Particles
      params={{
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            slow: {
              factor: 1,
              radius: 0,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          lineLinked: {
            blink: false,
            color: {
              value: "#fff",
            },
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.4,
            shadow: {
              blur: 5,
              color: {
                value: "lime",
              },
              enable: false,
            },
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            collisions: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
          },
          number: {
            density: {
              enable: false,
              area: 2000,
            },
            limit: 0,
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 2,
              sync: false,
            },
            random: {
              enable: false,
              minimumValue: 1,
            },
            value: 0.4,
          },
          rotate: {
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            random: false,
            value: 0,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
              close: true,
            },
            polygon: {
              close: true,
              fill: true,
              sides: 5,
            },
            type: "circle",
            custom: {},
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 1,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          stroke: {
            color: {
              value: "#ff0000",
            },
            width: 0,
            opacity: 1,
          },
        },
        polygon: {
          draw: {
            enable: true,
            stroke: {
              color: "rgba(255,255,255,0.2)",
              width: 0.5,
              opacity: 0.2,
            },
          },
          enable: true,
          inline: {
            arrangement: "equidistant",
          },
          move: {
            radius: 10,
            type: "path",
          },
          scale: 0.5,
          type: "inline",
          // url: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online-1520x800.png"
        },
        pauseOnBlur: true,
        background: {
          color: "#000000",
        },
      }}
    />
  );
}
