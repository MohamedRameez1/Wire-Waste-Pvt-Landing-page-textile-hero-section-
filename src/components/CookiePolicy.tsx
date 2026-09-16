import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { T } from './shared';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function CookiePolicy() {
  return (
    <>
      <Navbar />

      {/* =========================
          BACK LINK
      ========================= */}

      <div className="pt-24 sm:pt-28 bg-[#F5F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#Cookies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors hover:text-[#4A7C6F]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </div>

      <main
        style={{
          minHeight: '100vh',
          background: T.offWhite,
          padding: '110px 5% 80px'
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 22,
            padding: '48px 42px',
            boxShadow: '0 8px 44px rgba(35,55,109,0.08)'
          }}
        >
          <h1
            style={{
              fontFamily: "'Fraunces',serif",
              fontSize: 'clamp(32px,5vw,48px)',
              fontWeight: 500,
              color: T.textPrimary,
              marginBottom: 12
            }}
          >
            Cookie Policy
          </h1>

          <p
            style={{
              fontSize: 14,
              color: T.textMuted,
              marginBottom: 36
            }}
          >
            Last updated: September 1, 2026
          </p>

          <p>
            This Cookie Policy explains how Wire Waste may use cookies and
            similar technologies when you visit our website.
          </p>

          <h2>1. What Are Cookies?</h2>

          <p>
            Cookies are small text files stored on your device when you visit a
            website. They can help websites remember information, understand
            website usage, and provide certain functionality.
          </p>

          <h2>2. How We Use Cookies</h2>

          <p>We may use cookies and similar technologies to:</p>

          <ul>
            <li>Keep the website functioning properly.</li>
            <li>Remember certain preferences.</li>
            <li>Understand website traffic and usage.</li>
            <li>Improve website performance and user experience.</li>
            <li>Support security and prevent misuse.</li>
          </ul>

          <h2>3. Types of Cookies</h2>

          <h3>Essential Cookies</h3>

          <p>
            These cookies may be necessary for certain website functions and
            security features. They generally cannot be disabled through
            website preference controls without affecting functionality.
          </p>

          <h3>Analytics Cookies</h3>

          <p>
            Analytics technologies may help us understand how visitors
            interact with our website, such as which pages are visited and how
            the website is performing.
          </p>

          <h3>Preference Cookies</h3>

          <p>
            These cookies may remember choices or preferences to provide a more
            convenient experience.
          </p>

          <h2>4. Third-Party Cookies</h2>

          <p>
            Some third-party services used by our website may place their own
            cookies or similar technologies. These services may include
            analytics, security, embedded content, or other website
            functionality.
          </p>

          <p>
            Third-party providers operate according to their own privacy and
            cookie policies.
          </p>

          <h2>5. Managing Cookies</h2>

          <p>
            Most web browsers allow you to control or delete cookies through
            browser settings. Disabling certain cookies may affect the
            functionality or performance of parts of the website.
          </p>

          <h2>6. Changes to This Cookie Policy</h2>

          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in our website, services, technologies, or legal
            requirements.
          </p>

          <h2>7. Contact Us</h2>

          <p>
            If you have questions about our use of cookies, please contact Wire
            Waste through the contact information available on our website.
          </p>
        </div>

        <style>{`
          h2 {
            font-family: 'Fraunces', serif;
            font-size: 25px;
            font-weight: 600;
            color: ${T.textPrimary};
            margin-top: 34px;
            margin-bottom: 14px;
          }

          h3 {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 17px;
            font-weight: 700;
            color: ${T.textPrimary};
            margin-top: 24px;
            margin-bottom: 10px;
          }

          p, li {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 15px;
            line-height: 1.8;
            color: ${T.textSec};
          }

          ul {
            padding-left: 24px;
          }

          li {
            margin-bottom: 7px;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}