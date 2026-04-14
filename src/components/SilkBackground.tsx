import React, { useEffect, useRef } from 'react';
import { T } from './shared';
export function SilkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 0;
    let height = 0;
    let time = 0;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // Create a dark navy gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#1a2d5e');
      bgGrad.addColorStop(1, '#101a36');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);
      // Draw silk waves
      const lines = 6;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        const amplitude = 120 + i * 20;
        const frequency = 0.002 + i * 0.0005;
        const speed = time * (0.001 + i * 0.0002);
        for (let x = 0; x <= width; x += 20) {
          const y =
          height / 2 +
          Math.sin(x * frequency + speed) * amplitude * Math.sin(speed * 0.5);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(154, 181, 42, ${0.05 + i * 0.02})`; // Lime accent
        ctx.lineWidth = 40 + i * 10;
        ctx.stroke();
        ctx.strokeStyle = `rgba(74, 144, 226, ${0.03 + i * 0.01})`; // Blue accent
        ctx.lineWidth = 20 + i * 5;
        ctx.stroke();
      }
      time += 16;
      requestAnimationFrame(draw);
    };
    const animId = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />);


}