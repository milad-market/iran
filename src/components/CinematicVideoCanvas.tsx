import React, { useEffect, useRef } from 'react';
import { Theme } from '../types';

interface CinematicVideoCanvasProps {
  ambientTheme?: 'lapis' | 'amber' | 'turquoise' | 'amethyst';
  isPlaying?: boolean;
  theme?: Theme;
}

export const CinematicVideoCanvas: React.FC<CinematicVideoCanvasProps> = ({
  ambientTheme = 'lapis',
  isPlaying = true,
  theme = 'dark',
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
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Performance clamp

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
      mouseRef.current.targetX = normX * 25 * dpr;
      mouseRef.current.targetY = normY * 25 * dpr;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const isLight = theme === 'light';

    // Theme Palettes - Pure Obsidian Deep Black in dark mode, Crisp Pure White/Ivory in light mode
    const themeGradientsDark = {
      lapis: { c1: '#0c0c12', c2: '#171722', c3: '#050507' },
      amber: { c1: '#140e06', c2: '#22160a', c3: '#070502' },
      turquoise: { c1: '#081214', c2: '#101e20', c3: '#040708' },
      amethyst: { c1: '#120a17', c2: '#1d1024', c3: '#060308' },
    };

    const themeGradientsLight = {
      lapis: { c1: '#f9f9fb', c2: '#ffffff', c3: '#f1f1f4' },
      amber: { c1: '#faf8f5', c2: '#ffffff', c3: '#f5efe6' },
      turquoise: { c1: '#f5f9f9', c2: '#ffffff', c3: '#eef6f5' },
      amethyst: { c1: '#faf6fc', c2: '#ffffff', c3: '#f4edf8' },
    };

    const darkStarColors = ['#ffd68a', '#e9c176', '#f4f4f5', '#ffffff', '#c5a059'];
    const lightStarColors = ['#b8860b', '#c5a059', '#a27b32', '#6b5420', '#d4af37'];

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

    // Initialize stars / motes
    const stars: Star[] = [];
    const starCount = isLight ? 65 : 90;
    const starColors = isLight ? lightStarColors : darkStarColors;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (Math.random() * (isLight ? 1.6 : 1.8) + 0.6) * dpr,
        baseAlpha: Math.random() * (isLight ? 0.35 : 0.6) + 0.1,
        pulseSpeed: (Math.random() * 0.02 + 0.008),
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Initialize embers
    const embers: Ember[] = [];
    const emberCount = isLight ? 20 : 35;
    const emberColors = isLight
      ? ['#b8860b', '#c5a059', '#967431', '#d4af37']
      : ['#ffd68a', '#e9c176', '#ffb03a', '#c5a059'];

    for (let i = 0; i < emberCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4 * dpr,
        vy: -(Math.random() * 0.7 + 0.3) * dpr,
        size: (Math.random() * 2 + 1) * dpr,
        alpha: Math.random() * (isLight ? 0.4 : 0.8) + 0.15,
        fadeSpeed: Math.random() * 0.004 + 0.001,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      });
    }

    let frame = 0;

    const render = () => {
      frame++;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const paletteGroup = isLight ? themeGradientsLight : themeGradientsDark;
      const palette = paletteGroup[ambientTheme] || paletteGroup.lapis;

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

      // 2. Subtle Aurora / Gilded Wave
      ctx.save();
      const waveY = height * 0.6 + Math.sin(frame * 0.01) * 35 * dpr;
      const nebulaGrad = ctx.createLinearGradient(0, waveY - 140 * dpr, 0, waveY + 180 * dpr);
      nebulaGrad.addColorStop(0, 'rgba(197, 160, 89, 0)');
      nebulaGrad.addColorStop(0.5, isLight ? 'rgba(197, 160, 89, 0.06)' : 'rgba(197, 160, 89, 0.04)');
      nebulaGrad.addColorStop(1, isLight ? 'rgba(230, 220, 200, 0)' : 'rgba(10, 10, 15, 0)');

      ctx.fillStyle = nebulaGrad;
      ctx.beginPath();
      ctx.moveTo(0, waveY);
      for (let x = 0; x <= width; x += 80 * dpr) {
        const y = waveY + Math.sin((x * 0.002) + (frame * 0.012)) * 25 * dpr;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Render Twinkling Stars / Illuminations
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (isPlaying) {
          s.phase += s.pulseSpeed;
        }
        const currentAlpha = s.baseAlpha + Math.sin(s.phase) * (isLight ? 0.15 : 0.3);

        ctx.save();
        ctx.globalAlpha = Math.max(0.05, Math.min(1, currentAlpha));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        const px = s.x - mouseRef.current.x * 0.3;
        const py = s.y - mouseRef.current.y * 0.3;
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 4. Render Ascending Golden Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        if (isPlaying) {
          e.x += e.vx + Math.sin(frame * 0.02 + i) * 0.25 * dpr;
          e.y += e.vy;
          e.alpha -= e.fadeSpeed;

          if (e.y < -20 * dpr || e.alpha <= 0.02) {
            e.x = Math.random() * width;
            e.y = height + 10 * dpr;
            e.alpha = Math.random() * (isLight ? 0.5 : 0.8) + 0.2;
            e.vy = -(Math.random() * 0.7 + 0.3) * dpr;
          }
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, e.alpha));
        ctx.fillStyle = e.color;
        if (!isLight) {
          ctx.shadowColor = e.color;
          ctx.shadowBlur = 6 * dpr;
        }
        ctx.beginPath();
        const px = e.x - mouseRef.current.x * 0.7;
        const py = e.y - mouseRef.current.y * 0.7;
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
  }, [ambientTheme, isPlaying, theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block gpu-accelerated" />
      {/* Subtle cinematic vignette */}
      <div className="absolute inset-0 cinematic-vignette" />
    </div>
  );
};
