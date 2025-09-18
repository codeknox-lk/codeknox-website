import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Add a small delay before calling onComplete
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 500);
      },
    });

    // Initial state - hide everything
    gsap.set(".spinner-ring", { scale: 0, opacity: 0 });
    // Set initial state for each big letter
    gsap.set(".big-letter", { opacity: 0, y: 50, scale: 0.3 });

    // Animate spinner rings appearing
    tl.to(".spinner-ring", {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
    })
      // Animate each big letter individually with typewriter effect
      .to(
        ".big-letter",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.1"
      )
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power2.in",
      });

    // Add some particle effects
    createParticles();

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const createParticles = () => {
    if (!containerRef.current) return;

    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      containerRef.current.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      });

      gsap.to(particle, {
        y: "-=100",
        opacity: 0,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        delay: Math.random() * 2,
      });
    }
  };

  return (
    <div ref={containerRef} className="splash-screen">
      <div className="splash-content">
        <div ref={logoRef} className="logo-container">
          {/* Big CODEKNOX Text */}
          <div className="big-text-container">
            <span className="big-letter">C</span>
            <span className="big-letter">O</span>
            <span className="big-letter">D</span>
            <span className="big-letter">E</span>
            <span className="big-letter">K</span>
            <span className="big-letter">N</span>
            <span className="big-letter">O</span>
            <span className="big-letter">X</span>
          </div>

          {/* Loading Spinner */}
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
