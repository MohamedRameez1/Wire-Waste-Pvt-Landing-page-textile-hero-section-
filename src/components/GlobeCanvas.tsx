import React, { useCallback, useEffect, useRef } from 'react';
import { T } from './shared';
export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotRef = useRef(0);
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, W: number, H: number, rot: number) => {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2,
        cy = H / 2,
        R = Math.min(W, H) * 0.42;
      const outerGlow = ctx.createRadialGradient(
        cx,
        cy,
        R * 0.5,
        cx,
        cy,
        R * 1.5
      );
      outerGlow.addColorStop(0, 'rgba(154,181,42,0.12)');
      outerGlow.addColorStop(0.5, 'rgba(35,55,109,0.07)');
      outerGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();
      const atm = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.1);
      atm.addColorStop(0, 'rgba(58,85,153,0.20)');
      atm.addColorStop(1, 'rgba(58,85,153,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = atm;
      ctx.fill();
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      const ocean = ctx.createRadialGradient(
        cx - R * 0.3,
        cy - R * 0.3,
        R * 0.02,
        cx,
        cy,
        R
      );
      ocean.addColorStop(0, '#5fa8d3');
      ocean.addColorStop(0.4, '#3d7fbf');
      ocean.addColorStop(0.72, '#235ea6');
      ocean.addColorStop(0.88, '#1a3f82');
      ocean.addColorStop(1, '#0e1f4a');
      ctx.fillStyle = ocean;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      ctx.strokeStyle = 'rgba(120,180,240,0.15)';
      ctx.lineWidth = 0.6;
      for (let lat = -80; lat <= 80; lat += 20) {
        const ry = R * Math.sin(lat * Math.PI / 180);
        const rx = Math.sqrt(Math.max(0, R * R - ry * ry));
        if (rx < 2) continue;
        ctx.beginPath();
        ctx.ellipse(cx, cy + ry, rx, rx * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 20) {
        const a = (lon + rot) % 360 * Math.PI / 180;
        const w = Math.cos(a);
        if (Math.abs(w) < 0.02) continue;
        ctx.beginPath();
        ctx.ellipse(
          cx + w * R * 0.28,
          cy,
          Math.abs(w) * R,
          R,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }
      const continents = [
      {
        path: [
        [-0.28, -0.4],
        [-0.46, -0.22],
        [-0.5, 0.06],
        [-0.34, 0.16],
        [-0.18, 0.26],
        [-0.1, 0.08],
        [-0.16, -0.14],
        [-0.2, -0.4]],

        c: '#3d7a45'
      },
      {
        path: [
        [-0.2, 0.3],
        [-0.3, 0.2],
        [-0.4, 0.34],
        [-0.38, 0.54],
        [-0.26, 0.68],
        [-0.16, 0.62],
        [-0.14, 0.42]],

        c: '#4a8840'
      },
      {
        path: [
        [0.02, -0.46],
        [0.12, -0.4],
        [0.2, -0.3],
        [0.18, -0.18],
        [0.08, -0.06],
        [0.04, -0.18],
        [0.02, -0.46]],

        c: '#4a7e38'
      },
      {
        path: [
        [0.06, -0.04],
        [0.18, -0.04],
        [0.22, 0.1],
        [0.18, 0.36],
        [0.08, 0.56],
        [-0.02, 0.52],
        [-0.02, 0.1],
        [0.06, -0.04]],

        c: '#528c42'
      },
      {
        path: [
        [0.2, -0.44],
        [0.5, -0.38],
        [0.62, -0.16],
        [0.5, -0.02],
        [0.34, 0.08],
        [0.2, 0.04],
        [0.12, -0.1],
        [0.2, -0.44]],

        c: '#3e7a3e'
      },
      {
        path: [
        [0.4, 0.28],
        [0.58, 0.26],
        [0.62, 0.42],
        [0.52, 0.54],
        [0.38, 0.5],
        [0.34, 0.36]],

        c: '#5a8840'
      }];

      const rotRad = rot * Math.PI / 180;
      continents.forEach(({ path: cpts, c }) => {
        const pts2 = cpts.map(([nx, ny]) => {
          const lon0 = Math.atan2(nx, 0.5);
          const a = lon0 + rotRad;
          const vis = Math.cos(a);
          return {
            x: cx + Math.sin(a) * R * 0.95,
            y: cy + ny * R,
            vis
          };
        });
        if (pts2.every((p) => p.vis < -0.05)) return;
        ctx.beginPath();
        pts2.forEach((p, i) => {
          i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.fillStyle = c + 'dd';
        ctx.fill();
        ctx.strokeStyle = c + '55';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      });
      const hi = ctx.createRadialGradient(
        cx - R * 0.32,
        cy - R * 0.36,
        0,
        cx - R * 0.14,
        cy - R * 0.16,
        R * 0.78
      );
      hi.addColorStop(0, 'rgba(255,255,255,0.30)');
      hi.addColorStop(0.45, 'rgba(255,255,255,0.08)');
      hi.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = hi;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      const night = ctx.createRadialGradient(
        cx + R * 0.52,
        cy + R * 0.18,
        R * 0.1,
        cx + R * 0.55,
        cy,
        R * 0.85
      );
      night.addColorStop(0, 'rgba(4,8,24,0.75)');
      night.addColorStop(1, 'rgba(4,8,24,0)');
      ctx.fillStyle = night;
      ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      const cities = [
      [-0.1, -0.24],
      [0.06, -0.3],
      [0.18, -0.2],
      [0.28, -0.12],
      [0.14, -0.04],
      [0.06, 0.14]];

      cities.forEach(([nx, ny]) => {
        const a = Math.atan2(nx, 0.5) + rotRad;
        if (Math.cos(a) > -0.08) return;
        const px = cx + Math.sin(a) * R * 0.92,
          py = cy + ny * R;
        const cg = ctx.createRadialGradient(px, py, 0, px, py, 4);
        cg.addColorStop(0, 'rgba(255,235,120,0.9)');
        cg.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      });
      ctx.restore();
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();
      const rim = ctx.createLinearGradient(cx - R, cy, cx - R * 0.55, cy);
      rim.addColorStop(0, 'rgba(154,181,42,0.55)');
      rim.addColorStop(1, 'transparent');
      ctx.fillStyle = rim;
      ctx.fillRect(cx - R, cy - R, R * 0.5, R * 2);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(120,160,220,0.28)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.32);
      ctx.scale(1, 0.26);
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.24, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(154,181,42,0.25)';
      ctx.lineWidth = 1.4 / 0.26;
      ctx.stroke();
      const oa = rot * 0.55 * Math.PI / 180;
      ctx.fillStyle = T.lime;
      ctx.beginPath();
      ctx.arc(
        Math.cos(oa) * R * 1.24,
        Math.sin(oa) * R * 1.24,
        3.5 / 0.26,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.restore();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.55);
      ctx.scale(0.26, 1);
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.38, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(58,85,153,0.20)';
      ctx.lineWidth = 1.1 / 0.26;
      ctx.stroke();
      const ob = rot * -0.75 * Math.PI / 180;
      ctx.fillStyle = T.navyLt;
      ctx.beginPath();
      ctx.arc(
        Math.cos(ob) * R * 1.38,
        Math.sin(ob) * R * 1.38,
        2.8 / 0.26,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.restore();
    },
    []
  );
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = canvas.offsetWidth,
      H = canvas.offsetHeight;
    const setSize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);
    const tick = () => {
      rotRef.current = (rotRef.current + 0.2) % 360;
      draw(ctx, W, H, rotRef.current);
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [draw]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }} />);


}