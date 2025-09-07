'use client';

import React, { useEffect, useRef } from 'react';

const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    let heroSectionHeight = 0;
    const heroElement = document.getElementById('home');
    if (heroElement) {
      heroSectionHeight = heroElement.offsetHeight;
    }
    
    canvas.width = window.innerWidth;
    canvas.height = heroSectionHeight || window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      const heroElement = document.getElementById('home');
      if (heroElement) {
        canvas.height = heroElement.offsetHeight;
      } else {
        canvas.height = window.innerHeight;
      }
      initializeVariables();
    };
    
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;
      timeToLive: number;
      opacity: number;

      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.timeToLive = 1;
        this.opacity = 1;
      }
    
      update() {
        this.x += this.dx;
        this.y += this.dy;
        this.timeToLive -= 0.01;
        this.opacity -= 0.01;
        this.draw();
      }
    
      draw() {
        if (!c) return;
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }
    }
    
    class Explosion {
      particles: Particle[];
      
      constructor(x: number, y: number, colors: string[]) {
        this.particles = [];
        this.init(x, y, colors);
      }
    
      init(x: number, y:number, colors: string[]) {
        const particleCount = 30;
        const angleIncrement = (Math.PI * 2) / particleCount;

        for (let i = 0; i < particleCount; i++) {
          const power = Math.random() * 5 + 2;
          const dx = Math.cos(angleIncrement * i) * power;
          const dy = Math.sin(angleIncrement * i) * power;
          const randomColorIndex = Math.floor(Math.random() * colors.length);
          const randomParticleColor = colors[randomColorIndex];
          this.particles.push(new Particle(x, y, dx, dy, Math.random() * 3 + 1, randomParticleColor));
        }
      }
    
      update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].update();
          if (this.particles[i].timeToLive <= 0) {
            this.particles.splice(i, 1);
          }
        }
      }
    }

    let explosions: Explosion[];
    let colors: string[];

    const initializeVariables = () => {
      explosions = [];
      colors = ['#ff4747', '#00ceed', '#fff', 'pink', '#affdf4'];
    };

    initializeVariables();

    let isAnimating = false;

    const animate = () => {
      if (!c || !canvas) return;
      animationFrameId.current = window.requestAnimationFrame(animate);
      
      c.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let j = explosions.length - 1; j >= 0; j--) {
        explosions[j].update();
        if (explosions[j].particles.length <= 0) {
          explosions.splice(j, 1);
        }
      }
    };
    
    const startFireworks = () => {
        if (isAnimating) return;
        isAnimating = true;

        const intervalId = setInterval(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            explosions.push(new Explosion(x, y, colors));
        }, 200);

        setTimeout(() => {
            clearInterval(intervalId);
            isAnimating = false;
        }, 3000);
    };

    animate();
    const mainInterval = setInterval(startFireworks, 6000);
    startFireworks(); // Initial burst

    return () => {
      window.removeEventListener('resize', handleResize);
      if(animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
      clearInterval(mainInterval);
    };

  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Fireworks;
