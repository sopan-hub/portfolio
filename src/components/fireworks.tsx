'use client';

import React, { useEffect, useRef } from 'react';

const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    let isMouseDown = false;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      initializeVariables();
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleTouchStart = () => {
      isMouseDown = true;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      mouse.x = event.touches[0].pageX;
      mouse.y = event.touches[0].pageY;
    };

    const handleTouchEnd = () => {
      isMouseDown = false;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);


    class Cannon {
      x: number;
      y: number;
      width: number;
      height: number;
      angle: number;
      color: string;
      desiredAngle: number;
      
      constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = 0;
        this.color = color;
        this.desiredAngle = 0;
      }
    
      update() {
        this.desiredAngle = Math.atan2(mouse.y - this.y, mouse.x - this.x);
        this.angle = this.desiredAngle;
        this.draw();
      }
    
      draw() {
        if (!c) return;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.angle);
        c.beginPath();
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 3;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fillRect(0, -this.height / 2, this.width, this.height);
        c.closePath();
        c.restore();
      }
    }

    class Cannonball {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;
      particleColors: string[];
      source: Cannon;
      timeToLive: number;

      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string, cannon: Cannon, particleColors: string[]) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = -dy;
        this.radius = radius;
        this.color = color;
        this.particleColors = particleColors;
        this.source = cannon;
        this.timeToLive = canvas.height / (canvas.height + 800);
        this.init();
      }
    
      init() {
        this.x = Math.cos(this.source.angle) * this.source.width;
        this.y = Math.sin(this.source.angle) * this.source.width;
    
        this.x = this.x + (canvas.width / 2);
        this.y = this.y + (canvas.height);
    
        if (mouse.x - canvas.width / 2 < 0) {
          this.dx = -this.dx;
        }
    
        this.dy = Math.sin(this.source.angle) * 8;
        this.dx = Math.cos(this.source.angle) * 8;
      }
    
      update() {
        if (this.y + this.radius + this.dy > canvas.height) {
          this.dy = -this.dy;
        } else {
          this.dy += gravity;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    
        this.timeToLive -= 0.01;
      }
    
      draw() {
        if (!c) return;
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 5;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }
    }
    
    class Particle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      color: string;
      timeToLive: number;

      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = -dy;
        this.radius = 5;
        this.color = color;
        this.timeToLive = 1;
      }
    
      update() {
        if (this.y + this.radius + this.dy > canvas.height) {
          this.dy = -this.dy;
        }
    
        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
          this.dx = -this.dx;
        }
    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    
        this.timeToLive -= 0.01;
      }
    
      draw() {
        if (!c) return;
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
        c.shadowColor = this.color;
        c.shadowBlur = 10;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }
    }
    
    class Explosion {
      particles: Particle[];
      rings: any[];
      source: Cannonball;

      constructor(cannonball: Cannonball) {
        this.particles = [];
        this.rings = [];
        this.source = cannonball;
        this.init();
      }
    
      init() {
        for (let i = 0; i < 10; i++) {
          const dx = (Math.random() * 6) - 3;
          const dy = (Math.random() * 6) - 3;
          const randomColorIndex = Math.floor(Math.random() * this.source.particleColors.length);
          const randomParticleColor = this.source.particleColors[randomColorIndex];
          this.particles.push(new Particle(this.source.x, this.source.y, dx, dy, 1, randomParticleColor));
        }
      }
    
      update() {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update();
          if (this.particles[i].timeToLive < 0) {
            this.particles.splice(i, 1);
          }
        }
        for (let j = 0; j < this.rings.length; j++) {
          this.rings[j].update();
          if (this.rings[j].timeToLive < 0) {
            this.rings.splice(j, 1);
          }
        }
      }
    }

    let gravity = -0.1;
    let cannon: Cannon;
    let cannonballs: Cannonball[];
    let explosions: Explosion[];
    let colors: { cannonballColor: string; particleColors: string[] }[];

    const initializeVariables = () => {
      cannon = new Cannon(canvas.width / 2, canvas.height, 40, 20, 'white');
      cannonballs = [];
      explosions = [];
      colors = [
        {
          cannonballColor: '#affdf4',
          particleColors: ['#ff4747', '#00ceed', '#fff', 'pink'],
        },
      ];
    };

    initializeVariables();

    let timer = 0;
    let isIntroComplete = false;
    let introTimer = 0;

    const animate = () => {
      window.requestAnimationFrame(animate);
      if (!c || !canvas) return;

      c.fillStyle = 'rgba(18, 18, 18, 0)';
      c.clearRect(0, 0, canvas.width, canvas.height);
      cannon.update();
      
      if (isIntroComplete === false) {
        introTimer += 1;
        if (introTimer % 3 === 0) {
          const randomColor = Math.floor(Math.random() * colors.length);
          const color = colors[randomColor];
          cannonballs.push(
            new Cannonball(canvas.width / 2, canvas.height / 2, 2, 2, 4, color.cannonballColor, cannon, color.particleColors)
          );
        }
        if (introTimer > 30) {
          isIntroComplete = true;
        }
      }

      for (let i = 0; i < cannonballs.length; i++) {
        cannonballs[i].update();
        if (cannonballs[i].timeToLive <= 0) {
          explosions.push(new Explosion(cannonballs[i]));
          cannonballs.splice(i, 1);
        }
      }

      for (let j = 0; j < explosions.length; j++) {
        explosions[j].update();
        if (explosions[j].particles.length <= 0) {
          explosions.splice(j, 1);
        }
      }

      if (isMouseDown === true) {
        timer += 1;
        if (timer % 3 === 0) {
          const randomParticleColorIndex = Math.floor(Math.random() * colors.length);
          const randomColors = colors[randomParticleColorIndex];
          cannonballs.push(
            new Cannonball(mouse.x, mouse.y, 2, 2, 4, randomColors.cannonballColor, cannon, randomColors.particleColors)
          );
        }
      }
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };

  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, pointerEvents: 'none' }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Fireworks;
