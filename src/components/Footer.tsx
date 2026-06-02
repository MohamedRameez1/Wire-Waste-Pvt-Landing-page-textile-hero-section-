import React from 'react';
import { T, Icon, WW_LOGO } from './shared';

export function Footer() {
  const cols = [
    {
      title: 'Platform',
      links: ['Traceability', 'Design Tools', 'Metrics', 'Stakeholders']
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'GDPR']
    }
  ];

  return (
    <footer
      aria-label="Wire Waste Footer"
      style={{
        background: T.navy,
        color: 'rgba(255,255,255,0.7)',
        padding: '58px 5% 38px'
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto'
        }}
      >
        <div
          className="ww-footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 48,
            marginBottom: 52
          }}
        >
          <div>
            <img
              src={WW_LOGO}
              alt="Wire Waste Textile Circularity Platform Logo"
              style={{
                height: 44,
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)',
                opacity: 0.9,
                userSelect: 'none',
                marginBottom: 18
              }}
            />

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.78,
                maxWidth: 280
              }}
            >
              Enriching the evolving waste management supply chain with
              data-driven circularity.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 20
              }}
            >
              {[
                {
                  ic: 'mail',
                  href: 'mailto:support@wirewaste.net',
                  label: 'Email Wire Waste Support'
                },
                {
                  ic: 'linkedin',
                  href: 'https://www.linkedin.com/company/wire-waste/posts/?feedView=all',
                  label: 'Wire Waste LinkedIn'
                },
                {
                  ic: 'twitter',
                  href: '#',
                  label: 'Wire Waste Twitter'
                }
              ].map(({ ic, href, label }) => (
                <a
                  key={ic}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background .2s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) =>
                    e.currentTarget.style.background =
                      'rgba(154,181,42,0.22)'
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.08)'
                  }
                >
                  <Icon
                    name={ic}
                    size={16}
                    color="rgba(255,255,255,0.7)"
                    strokeWidth={1.6}
                  />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.42)',
                  letterSpacing: '.10em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                  fontFamily: "'JetBrains Mono',monospace"
                }}
              >
                {col.title}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 11
                }}
              >
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    aria-label={l}
                    style={{
                      color: 'rgba(255,255,255,0.62)',
                      textDecoration: 'none',
                      fontSize: 14,
                      transition: 'color .2s'
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = '#fff')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        'rgba(255,255,255,0.62)')
                    }
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 13
          }}
        >
          <span>© 2025 Wire Waste. All rights reserved.</span>

          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12,
              color: 'rgba(255,255,255,0.38)'
            }}
          >
            Built for a circular future.
          </span>
        </div>
      </div>
    </footer>
  );
}