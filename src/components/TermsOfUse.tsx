import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { T } from './shared';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function TermsOfUse() {
  return (
    <>
      <Navbar />

      {/* =========================
          BACK LINK
      ========================= */}

      <div className="pt-24 sm:pt-28 bg-[#F5F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#Terms"
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
            Terms of Use
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
            These Terms of Use govern your access to and use of the Wire Waste
            website, platform, and related services. By accessing or using our
            services, you agree to comply with these terms.
          </p>

          <h2>1. Use of Our Services</h2>

          <p>
            You agree to use the website and services only for lawful business
            purposes and in accordance with these Terms of Use.
          </p>

          <p>
            You must not use our services to engage in unlawful activity,
            interfere with the operation of our services, attempt to gain
            unauthorised access, or misuse information belonging to other
            users.
          </p>

          <h2>2. Business Information</h2>

          <p>
            When submitting information to Wire Waste, you agree that the
            information provided is accurate and that you have the authority to
            provide it on behalf of your organisation where applicable.
          </p>

          <h2>3. Accounts and Access</h2>

          <p>
            Certain Wire Waste services may require an account. Users are
            responsible for maintaining the confidentiality of their account
            credentials and for activities conducted through their accounts.
          </p>

          <h2>4. Intellectual Property</h2>

          <p>
            Unless otherwise stated, the Wire Waste website, platform,
            branding, logos, software, designs, text, graphics, and other
            materials are owned by or licensed to Wire Waste and are protected
            by applicable intellectual property laws.
          </p>

          <p>
            You may not reproduce, modify, distribute, sell, reverse engineer,
            or commercially exploit our materials without prior written
            permission, except where permitted by applicable law.
          </p>

          <h2>5. User Content and Information</h2>

          <p>
            Where users submit information, data, documents, or other content
            to our services, users remain responsible for ensuring that they
            have the necessary rights and permissions to provide that
            information.
          </p>

          <h2>6. Service Availability</h2>

          <p>
            We aim to maintain reliable services but do not guarantee that the
            website or platform will always be available, uninterrupted,
            secure, or error-free.
          </p>

          <p>
            We may modify, suspend, or discontinue parts of our services when
            reasonably necessary for maintenance, security, development, or
            business purposes.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Our services may contain links to or integrations with third-party
            websites and services. Wire Waste is not responsible for the
            content, availability, security, or practices of third-party
            services.
          </p>

          <h2>8. Disclaimer</h2>

          <p>
            Information provided through our website is intended for general
            informational and business purposes. Unless expressly agreed in a
            separate written agreement, information available on the website
            does not constitute professional, legal, financial, or regulatory
            advice.
          </p>

          <h2>9. Limitation of Liability</h2>

          <p>
            To the maximum extent permitted by applicable law, Wire Waste will
            not be responsible for indirect, incidental, special,
            consequential, or similar losses arising from the use of or
            inability to use our website or services.
          </p>

          <h2>10. Changes to These Terms</h2>

          <p>
            We may update these Terms of Use from time to time. Updated terms
            will be published on this page together with the applicable
            revision date.
          </p>

          <h2>11. Governing Law</h2>

          <p>
            These Terms of Use shall be interpreted and governed according to
            the laws applicable to Wire Waste and the relevant jurisdiction in
            which its services are provided, subject to any mandatory legal
            requirements.
          </p>

          <h2>12. Contact</h2>

          <p>
            If you have questions regarding these Terms of Use, please contact
            Wire Waste through the contact information available on our
            website.
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
        `}</style>
      </main>

      <Footer />
    </>
  );
}