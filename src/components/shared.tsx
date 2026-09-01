import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// ─── THEME ───────────────────────────────────────────────────────────────────
export const T = {
  navy: '#23376D',
  navyMid: '#2d4580',
  navyLt: '#3a5599',
  lime: '#9AB52A',
  limeLt: '#b8d43a',
  limePale: '#f0f7d4',
  blueGrey: '#B3BACC',
  blueGreyLt: '#dde1ed',
  accent: '#4A7C6F',
  accentLt: '#6BA89A',
  accentPale: '#E8F3F0',
  textPrimary: '#1a2540',
  textSec: '#5a6580',
  textMuted: '#8a93a8',
  white: '#FFFFFF',
  offWhite: '#F4F6FB'
};
// ─── LOGO ────────────────────────────────────────────────────────────────────
export const WW_LOGO = "/WW_Logo_(4).png";

// ─── SVG ICON LIBRARY ────────────────────────────────────────────────────────
export const Icon = ({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.6





}: {name: string;size?: number;color?: string;strokeWidth?: number;}) => {
  const s = {
    width: size,
    height: size,
    display: 'block',
    flexShrink: 0
  };
  const p = {
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };
  const icons: Record<string, React.ReactNode> = {
    users:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
</svg>,
 brand:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <circle cx="12" cy="8" r="4" />
  <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
</svg>,
    factory:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M3 21h18" />
  <rect x="4" y="9" width="6" height="12" />
  <rect x="10" y="12" width="5" height="9" />
  <rect x="15" y="6" width="5" height="15" />
  <path d="M6 12h1M6 15h1M6 18h1" />
  <path d="M12 15h1M12 18h1" />
  <path d="M17 9h1M17 12h1M17 15h1M17 18h1" />
</svg>,

    recycle:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M1 6h13v10H1z" />
  <path d="M14 9h4l3 3v4h-7z" />
  <circle cx="5" cy="18" r="2" />
  <circle cx="18" cy="18" r="2" />
  <path d="M4 10h7" />
  <path d="M4 13h5" />
</svg>,

    truck:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <rect x="1" y="3" width="15" height="13" rx="1.5" />
        <path d="M16 8h4l3 5v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>,

    cog:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M9 3h6" />
  <path d="M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" />
  <path d="M8 14h8" />
  <path d="M9.5 11h5" />
</svg>,

 yarn:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M9 3h6l3 18H6L9 3z" />
  <path d="M10 7h4" />
  <path d="M9 11h6" />
  <path d="M8 15h8" />
  <path d="M7 19h10" />
</svg>,
    check:
    <svg style={s} viewBox="0 0 24 24" {...p}>
  <circle cx="12" cy="8" r="4" />
  <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
</svg>,

    collab:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85" />
      </svg>,

    atom:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <path d="M8 4l4 2 4-2 3 4-3 2v10H8V10L5 8l3-4z" />
</svg>,

    shield:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>,

    network:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M12 11l-5 6M12 11l5 6" />
      </svg>,

    thread:
<svg style={s} viewBox="0 0 24 24" {...p}>
  <rect x="3" y="11" width="18" height="10" rx="2" />
  <path d="M7 11V8a5 5 0 0 1 10 0v3" />
  <circle cx="12" cy="16" r="1" />
</svg>,
    loop:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M3 21v-5h5" />
      </svg>,

    leaf:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>,

    co2:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M12 3a9 9 0 0 0 0 18" />
        <path d="M12 3a9 9 0 0 1 0 18" />
        <path d="M3 12h18" />
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" />
      </svg>,

    trash:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6" />
      </svg>,

    demo:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M10 10l2 2 4-4" />
      </svg>,

    phone:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.82-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>,

    rocket:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>,

    mail:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>,

    globe:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>,

    book:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>,

    trend:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>,

    star:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>,

    menu:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>,

    close:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>,

    arrow:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>,

    linkedin:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>,

    twitter:
    <svg style={s} viewBox="0 0 24 24" {...p}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>

  };
  return <>{icons[name] || null}</>;
};
// ─── HELPERS ─────────────────────────────────────────────────────────────────
export function Badge({ label }: {label: string;}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        background: T.accentPale,
        border: `1px solid rgba(74,124,111,0.22)`,
        borderRadius: 100,
        padding: '5px 14px',
        marginBottom: 18
      }}>
      
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: T.accent
        }} />
      
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: T.accent,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          fontFamily: "'JetBrains Mono',monospace"
        }}>
        
        {label}
      </span>
    </div>);

}
export function SectionHeader({
  badge,
  title,
  subtitle




}: {badge?: string;title: string;subtitle?: string;}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 24
      }}
      animate={
      inView ?
      {
        opacity: 1,
        y: 0
      } :
      {}
      }
      transition={{
        duration: 0.7
      }}
      style={{
        textAlign: 'center',
        marginBottom: 56
      }}>
      
      {badge && <Badge label={badge} />}
      <h2
        style={{
          fontFamily: "'Fraunces',serif",
          fontSize: 'clamp(28px,4vw,48px)',
          fontWeight: 500,
          color: T.textPrimary,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          marginBottom: subtitle ? 16 : 0
        }}>
        
        {title}
      </h2>
      {subtitle &&
      <p
        style={{
          fontSize: 16,
          color: T.textSec,
          maxWidth: 560,
          margin: '0 auto',
          lineHeight: 1.75,
          fontFamily: "'Plus Jakarta Sans',sans-serif"
        }}>
        
          {subtitle}
        </p>
      }
    </motion.div>);

}
// ─── PARTICLES ───────────────────────────────────────────────────────────────
export function ParticleField() {
  const pts = Array.from(
    {
      length: 18
    },
    (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 6,
      dur: Math.random() * 8 + 10
    })
  );
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
      
      {pts.map((p) =>
      <div
        key={p.id}
        style={{
          position: 'absolute',
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          borderRadius: '50%',
          background:
          p.id % 3 === 0 ? T.lime : p.id % 3 === 1 ? T.navy : T.blueGrey,
          opacity: 0,
          animation: `floatUp ${p.dur}s ${p.delay}s ease-in-out infinite`
        }} />

      )}
    </div>);

}
export function CountUp({
  target,
  suffix = '',
  duration = 2000




}: {target: number;suffix?: string;duration?: number;}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>);

}
export function CircularProgress({
  pct,
  color,
  label,
  iconName





}: {pct: number;color: string;label: string;iconName: string;}) {
  const r = 52,
    circ = 2 * Math.PI * r;
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14
      }}>
      
      <div
        style={{
          position: 'relative'
        }}>
        
        <svg width={130} height={130} viewBox="0 0 130 130">
          <circle
            cx={65}
            cy={65}
            r={r}
            fill="none"
            stroke={T.blueGreyLt}
            strokeWidth={9} />
          
          <motion.circle
            cx={65}
            cy={65}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={9}
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{
              strokeDashoffset: circ
            }}
            animate={
            inView ?
            {
              strokeDashoffset: circ * (1 - pct / 100)
            } :
            {}
            }
            transition={{
              duration: 1.9,
              ease: 'easeOut',
              delay: 0.35
            }}
            transform="rotate(-90 65 65)" />
          
          <text
            x="65"
            y="60"
            textAnchor="middle"
            fontSize="22"
            fontWeight="700"
            fill={T.textPrimary}
            fontFamily="Plus Jakarta Sans">
            
            {pct}
          </text>
          <text
            x="65"
            y="76"
            textAnchor="middle"
            fontSize="13"
            fill={T.textMuted}
            fontFamily="Plus Jakarta Sans">
            
            %
          </text>
        </svg>
        <div
          style={{
            position: 'absolute',
            bottom: -6,
            right: -6,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 2px 10px ${color}44`
          }}>
          
          <Icon name={iconName} size={14} color="#fff" strokeWidth={2} />
        </div>
      </div>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: T.textSec,
          textAlign: 'center',
          maxWidth: 120
        }}>
        
        {label}
      </span>
    </div>);

}