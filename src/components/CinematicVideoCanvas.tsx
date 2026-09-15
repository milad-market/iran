import React, { useEffect, useRef, useState } from 'react';

interface CinematicVideoCanvasProps {
  ambientTheme?: 'lapis' | 'amber' | 'turquoise' | 'amethyst';
  isPlaying?: boolean;
}

export const CinematicVideoCanvas: React.FC<CinematicVideoCanvasProps> = ({
  ambientTheme = 'lapis',
  isPlaying = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Performance clamp for butter smoothness

    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Smooth mouse parallax tracker
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current.targetX = normX * 30 * dpr;
      mouseRef.current.targetY = normY * 30 * dpr;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Particle definition
    interface Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      pulseSpeed: number;
      phase: number;
      color: string;
    }

    interface Ember {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      fadeSpeed: number;
      color: string;
    }

    // Initialize stars
    const stars: Star[] = [];
    const starCount = 90;
    const starColors = ['#ffd68a', '#e9c176', '#acc7ff', '#ffffff', '#c5a059'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (Math.random() * 1.5 + 0.5) * dpr,
        baseAlpha: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Initialize golden floating embers (اخگرهای زرین)
    const embers: Ember[] = [];
    const emberCount = 35;
    const emberColors = ['#e9c176', '#c5a059', '#ffd68a', '#c85a32'];

    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6 * dpr,
        vy: -(Math.random() * 0.8 + 0.3) * dpr,
        size: (Math.random() * 2.5 + 1.2) * dpr,
        alpha: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.01 + 0.005,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      });
    }

    // Background themes palette
    const themeGradients = {
      lapis: { c1: '#04132b', c2: '#081e42', c3: '#020b1a' },
      amber: { c1: '#1c1208', c2: '#2a1a0c', c3: '#090502' },
      turquoise: { c1: '#042426', c2: '#083b3d', c3: '#021213' },
      amethyst: { c1: '#1e072b', c2: '#2c0d3e', c3: '#0a020f' },
    };

    let frame = 0;

    const render = () => {
      frame++;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const palette = themeGradients[ambientTheme] || themeGradients.lapis;

      // 1. Draw Deep Atmospheric Gradient
      const grad = ctx.createRadialGradient(
        width * 0.5 + mouseRef.current.x * 1.5,
        height * 0.35 + mouseRef.current.y * 1.5,
        10 * dpr,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      grad.addColorStop(0, palette.c2);
      grad.addColorStop(0.5, palette.c1);
      grad.addColorStop(1, palette.c3);

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Aurora / Golden Nebula Wave
      ctx.save();
      const waveY = height * 0.6 + Math.sin(frame * 0.01) * 40 * dpr;
      const nebulaGrad = ctx.createLinearGradient(0, waveY - 150 * dpr, 0, waveY + 200 * dpr);
      nebulaGrad.addColorStop(0, 'rgba(197, 160, 89, 0)');
      nebulaGrad.addColorStop(0.5, 'rgba(197, 160, 89, 0.04)');
      nebulaGrad.addColorStop(1, 'rgba(27, 59, 111, 0)');

      ctx.fillStyle = nebulaGrad;
      ctx.beginPath();
      ctx.moveTo(0, waveY);
      for (let x = 0; x <= width; x += 80 * dpr) {
        const y = waveY + Math.sin((x * 0.002) + (frame * 0.012)) * 30 * dpr;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Render Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (isPlaying) {
          s.phase += s.pulseSpeed;
        }
        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * 0.3;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        // Slightly parallaxed star positions
        const px = s.x - mouseRef.current.x * 0.3;
        const py = s.y - mouseRef.current.y * 0.3;
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Render Golden Ascending Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        if (isPlaying) {
          e.x += e.vx + Math.sin(frame * 0.02 + i) * 0.3 * dpr;
          e.y += e.vy;
          e.alpha -= e.fadeSpeed;

          // Recycle ember when faded or out of view
          if (e.y < -20 * dpr || e.alpha <= 0.02) {
            e.x = Math.random() * width;
            e.y = height + 10 * dpr;
            e.alpha = Math.random() * 0.8 + 0.2;
            e.vy = -(Math.random() * 0.8 + 0.3) * dpr;
          }
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, e.alpha));
        ctx.fillStyle = e.color;
        ctx.shadowColor = e.color;
        ctx.shadowBlur = 8 * dpr;
        ctx.beginPath();
        const px = e.x - mouseRef.current.x * 0.8;
        const py = e.y - mouseRef.current.y * 0.8;
        ctx.arc(px, py, e.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ambientTheme, isPlaying]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block gpu-accelerated" />
      {/* Subtle cinematic vignette */}
      <div className="absolute inset-0 cinematic-vignette" />
    </div>
  );
};
