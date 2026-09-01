import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CryptoJS from 'crypto-js';
import { T, Icon, Badge } from './shared';

const ENCRYPTION_KEY = CryptoJS.enc.Utf8.parse('32-CHAR-SECRET-KEY-WIRE-WASTE-25');
const ENCRYPTION_IV = CryptoJS.enc.Utf8.parse('16-CHAR-INIT-VEC');

const ROLES = [
  'Brand / Retailer',
  'Manufacturer',
  'Waste Handler',
  'Waste Merchant',
  'Pre-Processor',
  'End-Processor',
  'Investor',
  'Other'
];

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    website: '',
    location: ''
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  const field = (n: string): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 10,
    border: `1.5px solid ${
      focused === n ? T.navy : T.blueGreyLt
    }`,
    fontSize: 14,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    color: T.textPrimary,
    background: '#fff',
    outline: 'none',
    transition: 'border-color .2s',
    boxShadow:
      focused === n
        ? `0 0 0 3px rgba(35,55,109,0.09)`
        : 'none'
  });

  const ctaBtns = [
    {
      icon: 'demo',
      label: 'Request Demo',
      desc: 'See the platform in action',
      primary: true
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const payload = {
        Name: form.name,
        Email: form.email,
        Organization: form.company,
        ProfileTypeid: parseInt(form.role) || 0,
        Phone: form.phone,
        Website: form.website,
        Location: form.location
      };

      const plainText = JSON.stringify(payload);

      const encrypted = CryptoJS.AES.encrypt(
        plainText,
        ENCRYPTION_KEY,
        {
          iv: ENCRYPTION_IV,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }
      ).toString();

      const res = await fetch(
        'https://app.wirewaste.net/api/demoinvites',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-Payload-Encrypted': 'true'
          },
          body: JSON.stringify({
            encryptedData: encrypted
          })
        }
      );

      if (res.ok) {
        setSubmittedData({
          name: form.name,
          email: form.email
        });

        setForm({
          name: '',
          email: '',
          company: '',
          role: '',
          phone: '',
          website: '',
          location: ''
        });
      } else {
        const errorData = await res.json().catch(() => null);

        setMessage(
          errorData?.message ||
            'Failed to schedule demo. Try again.'
        );
      }
    } catch (err) {
      console.error('Submission error:', err);
      setMessage('Server error. Please try later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="about-us"
      ref={ref}
      style={{
        padding: '100px 5%',
        background: `linear-gradient(
          168deg,
          ${T.offWhite} 0%,
          rgba(179,186,204,0.18) 100%
        )`
      }}
    >
      <div
        className="ww-two-col"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'start'
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -24
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0
                }
              : {}
          }
          transition={{
            duration: 0.7
          }}
        >
          <Badge label="Get In Touch" />

          <h2
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 'clamp(28px,4vw,44px)',
              fontWeight: 500,
              color: T.textPrimary,
              lineHeight: 1.18,
              marginBottom: 18,
              letterSpacing: '-0.02em'
            }}
          >
            Ready to Transform Your Textile Waste Management?
          </h2>

          <p
            style={{
              fontSize: 15,
              color: T.textSec,
              lineHeight: 1.82,
              marginBottom: 36
            }}
          >
            Join our network of manufacturers, recyclers, and waste handlers to
            build a more sustainable textile industry.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
          >
            {ctaBtns.map((cta, i) => (
              <motion.button
                key={i}
                whileHover={{
                  x: 5
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  width: '100%',
                  background: cta.primary
                    ? `linear-gradient(135deg,${T.navy},${T.navyMid})`
                    : 'transparent',
                  color: cta.primary ? '#fff' : T.textPrimary,
                  border: `1.5px solid ${
                    cta.primary ? T.navy : T.blueGreyLt
                  }`,
                  borderRadius: 13,
                  padding: '14px 20px',
                  cursor: 'pointer',
                  textAlign: 'left' as const,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  transition: 'all .2s',
                  boxShadow: cta.primary
                    ? `0 4px 18px rgba(35,55,109,0.22)`
                    : 'none'
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: cta.primary
                      ? 'rgba(255,255,255,0.18)'
                      : T.offWhite,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon
                    name={cta.icon}
                    size={18}
                    color={cta.primary ? '#fff' : T.navy}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700
                    }}
                  >
                    {cta.label}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      opacity: 0.65,
                      marginTop: 2
                    }}
                  >
                    {cta.desc}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 24
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.15
          }}
          className="ww-glass"
          style={{
            borderRadius: 22,
            padding: '38px 34px',
            boxShadow: '0 8px 44px rgba(35,55,109,0.10)'
          }}
        >
          {submittedData ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#edf2e8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9AB52A"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "'Fraunces',serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: T.textPrimary,
                  marginBottom: 16
                }}
              >
                Demo Scheduled!
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: T.textSec,
                  lineHeight: 1.6,
                  marginBottom: 32,
                  fontFamily: "'Plus Jakarta Sans',sans-serif"
                }}
              >
                Thank you,{' '}
                <strong style={{ color: T.textPrimary }}>
                  {submittedData.name}
                </strong>
                . We've received your details and will get in touch with you at{' '}
                <strong
                  style={{
                    color: T.textPrimary,
                    wordBreak: 'break-all'
                  }}
                >
                  {submittedData.email}
                </strong>{' '}
                shortly.
              </p>

              <button
                onClick={() => setSubmittedData(null)}
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: T.navy,
                  border: `1.5px solid ${T.blueGreyLt}`,
                  borderRadius: 12,
                  padding: '12px 24px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  transition: 'all .2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = T.offWhite;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: T.textPrimary,
                  marginBottom: 26,
                  fontFamily: "'Fraunces',serif"
                }}
              >
                Schedule a Demo
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16
                }}
              >
                {[
                  {
                    name: 'name',
                    placeholder: 'Your Name',
                    type: 'text'
                  },
                  {
                    name: 'email',
                    placeholder: 'your.email@company.com',
                    type: 'email'
                  },
                  {
                    name: 'company',
                    placeholder: 'Your Company',
                    type: 'text'
                  },
                  {
                    name: 'phone',
                    placeholder: 'Phone Number',
                    type: 'tel'
                  },
                  {
                    name: 'website',
                    placeholder: 'Company Website Link',
                    type: 'url'
                  },
                  {
                    name: 'location',
                    placeholder: 'Location',
                    type: 'text'
                  }
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        [f.name]: e.target.value
                      }))
                    }
                    required={f.name !== 'phone'}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                    style={field(f.name)}
                  />
                ))}

                <select
                  value={form.role}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      role: e.target.value
                    }))
                  }
                  required
                  onFocus={() => setFocused('role')}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...field('role'),
                    color: form.role
                      ? T.textPrimary
                      : T.textMuted
                  }}
                >
                  <option value="">Select your role</option>

                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={
                    loading
                      ? {}
                      : {
                          scale: 1.02
                        }
                  }
                  whileTap={
                    loading
                      ? {}
                      : {
                          scale: 0.98
                        }
                  }
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 9,
                    background: `linear-gradient(135deg,${T.navy},${T.navyMid})`,
                    color: '#fff',
                    border: 'none',
                    borderRadius: 11,
                    padding: '15px',
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: loading
                      ? 'not-allowed'
                      : 'pointer',
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    boxShadow: `0 4px 22px rgba(35,55,109,0.30)`,
                    marginTop: 4,
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  <Icon
                    name="rocket"
                    size={16}
                    color="#fff"
                    strokeWidth={2}
                  />

                  {loading
                    ? 'Scheduling...'
                    : 'Schedule Demo'}
                </motion.button>

                {message && (
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: message.includes('successfully')
                        ? '#10b981'
                        : '#ef4444',
                      textAlign: 'center',
                      marginTop: 12,
                      fontFamily: "'Plus Jakarta Sans',sans-serif"
                    }}
                  >
                    {message}
                  </div>
                )}
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}