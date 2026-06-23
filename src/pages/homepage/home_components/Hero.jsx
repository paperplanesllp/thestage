import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import img from "../../../assets/IMG_2315.jpg.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.3,
        delay: 0.4,
      }
    );
  }, []);

  const lines = ["For The Pursuit Of Truth"];

  const styles = {
    section: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-end",
      backgroundImage: `url(${img})`,
      backgroundPosition: "50% 70%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "#fff",
    },
    verticalDepth: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 27%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.74) 80%, rgba(0,0,0,0.96) 100%)",
      pointerEvents: "none",
    },
    sideDepth: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.58) 36%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)",
      pointerEvents: "none",
    },
    vignette: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 68% 34%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 24%, rgba(0,0,0,0.58) 76%, rgba(0,0,0,0.9) 100%)",
      mixBlendMode: "multiply",
      pointerEvents: "none",
    },
    content: {
      position: "relative",
      zIndex: 1,
      width: "min(calc(100% - 40px), 680px)",
      marginLeft: "clamp(20px, 5vw, 72px)",
      marginRight: "20px",
      paddingTop: "120px",
      paddingBottom: "clamp(58px, 10vh, 108px)",
    },
    label: {
      margin: "0 0 clamp(16px, 2vw, 22px)",
      fontFamily: "Gordita, sans-serif",
      fontSize: "clamp(0.68rem, 1.3vw, 0.78rem)",
      lineHeight: 1.4,
      letterSpacing: "0.38em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.68)",
    },
    heading: {
      margin: 0,
      maxWidth: "680px",
      fontFamily: "Georgia, serif",
      fontSize: "clamp(3rem, 8vw, 7.6rem)",
      fontStyle: "italic",
      fontWeight: 400,
      lineHeight: 0.92,
      letterSpacing: 0,
      color: "#fff",
      textShadow: "0 22px 52px rgba(0,0,0,0.5)",
    },
    paragraph: {
      margin: "clamp(22px, 3vw, 32px) 0 0",
      maxWidth: "560px",
      fontFamily: "'Scope One', serif",
      fontSize: "clamp(1rem, 2vw, 1.22rem)",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.76)",
    },
    button: {
      marginTop: "clamp(28px, 4vw, 42px)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "48px",
      padding: "14px 28px",
      border: "1px solid rgba(255,255,255,0.72)",
      borderRadius: "999px",
      backgroundColor: isButtonHovered ? "#fff" : "transparent",
      color: isButtonHovered ? "#050505" : "#fff",
      fontFamily: "Gordita, sans-serif",
      fontSize: "0.74rem",
      fontWeight: 500,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition:
        "background-color 320ms ease, color 320ms ease, border-color 320ms ease, transform 320ms ease, box-shadow 320ms ease",
      transform: isButtonHovered ? "translateY(-2px)" : "translateY(0)",
      boxShadow: isButtonHovered
        ? "0 18px 42px rgba(0,0,0,0.32)"
        : "0 12px 34px rgba(0,0,0,0.18)",
    },
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.verticalDepth} />
      <div style={styles.sideDepth} />
      <div style={styles.vignette} />

      <div style={styles.content}>
        <p ref={(el) => (linesRef.current[0] = el)} style={styles.label}>
          The Stage
        </p>

        {lines.map((line, i) => (
          <h1
            key={i}
            ref={(el) => (linesRef.current[i + 1] = el)}
            style={styles.heading}
          >
            {line}
          </h1>
        ))}

        <p ref={(el) => (linesRef.current[2] = el)} style={styles.paragraph}>
          A space for thoughtful conversations, serious reading, and ideas that
          ask for attention beyond the obvious.
        </p>

        <button
          ref={(el) => (linesRef.current[3] = el)}
          onClick={() => navigate("/stage_brochure")}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={styles.button}
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default Hero;
