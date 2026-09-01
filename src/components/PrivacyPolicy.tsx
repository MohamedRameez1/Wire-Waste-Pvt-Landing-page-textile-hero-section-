import React from 'react';
import { T } from './shared';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  return (
    <>
      <Navbar />

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
            Privacy Policy
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
            Wire Waste respects your privacy and is committed to protecting
            the personal information you provide when using our website,
            platform, and services.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            We may collect information that you voluntarily provide to us,
            including:
          </p>

          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company or organisation name</li>
            <li>Job role or profile type</li>
            <li>Phone number</li>
            <li>Company website</li>
            <li>Location</li>
            <li>Information submitted when requesting a demonstration</li>
            <li>Information provided when contacting us</li>
          </ul>

          <p>
            We may also collect technical information such as browser type,
            device information, IP address, pages visited, and general website
            usage information.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>We may use collected information to:</p>

          <ul>
            <li>Respond to enquiries and requests for demonstrations.</li>
            <li>Provide and improve our services.</li>
            <li>Communicate with users and organisations.</li>
            <li>Understand how our website and platform are used.</li>
            <li>Maintain security and prevent misuse.</li>
            <li>Meet applicable legal and regulatory requirements.</li>
          </ul>

          <h2>3. Information Sharing</h2>

          <p>
            We do not sell your personal information. We may share information
            with trusted service providers who help us operate our website,
            platform, infrastructure, communications, analytics, or other
            business functions.
          </p>

          <p>
            We may also disclose information where required by law,
            regulation, legal process, or to protect our rights, users, or
            services.
          </p>

          <h2>4. Data Security</h2>

          <p>
            We take reasonable technical and organisational measures to
            protect information against unauthorised access, alteration,
            disclosure, or destruction. However, no internet-based service can
            guarantee complete security.
          </p>

          <h2>5. Data Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes described in this policy, including
            business, contractual, legal, accounting, and regulatory
            requirements.
          </p>

          <h2>6. Your Rights</h2>

          <p>
            Depending on applicable law, you may have rights to request access,
            correction, deletion, restriction, or other control over your
            personal information.
          </p>

          <p>
            To make a privacy-related request, please contact us using the
            contact details provided on our website.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Our website or platform may use third-party services for hosting,
            analytics, communications, security, or other functionality. These
            providers may process information according to their own privacy
            policies.
          </p>

          <h2>8. Children's Privacy</h2>

          <p>
            Our services are intended for businesses and professional users.
            We do not knowingly collect personal information from children.
          </p>

          <h2>9. Changes to This Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated revision date.
          </p>

          <h2>10. Contact Us</h2>

          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact Wire Waste through the
            contact information available on our website.
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