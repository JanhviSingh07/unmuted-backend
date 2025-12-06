import React, { useEffect, useRef } from 'react';

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5; // Slightly faster
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 300 + 200; // Big blobs
        
        // Explicit Green and Orange
        const colors = [
          'rgba(34, 197, 94, 0.4)',  // Brand Green (stronger opacity)
          'rgba(249, 115, 22, 0.35)', // Brand Orange (stronger opacity)
          'rgba(34, 197, 94, 0.3)',  
          'rgba(251, 146, 60, 0.3)'   // Lighter Orange
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse influence
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        if (Math.abs(dx) < 500 && Math.abs(dy) < 500) {
            this.x += dx * 0.002;
            this.y += dy * 0.002;
        }

        // Bounce
        if (this.x < -this.radius) this.vx = Math.abs(this.vx);
        if (this.x > width + this.radius) this.vx = -Math.abs(this.vx);
        if (this.y < -this.radius) this.vy = Math.abs(this.vy);
        if (this.y > height + this.radius) this.vy = -Math.abs(this.vy);
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Fewer particles but larger and more visible
    const particles = Array.from({ length: 8 }, () => new Particle());

    const animate = () => {
      // Clear with white but allow some transparency for color buildup
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      style={{ filter: 'blur(60px)' }} // Reduced blur to make colors more visible
    />
  );
};