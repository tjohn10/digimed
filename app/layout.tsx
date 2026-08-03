import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import BookingSuccessModal from '@/components/BookingSuccessModal';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export const metadata = {
  title: 'Ontime Therapy | Premium Cognitive Behavioral Therapy (CBT) & Psychotherapy',
  description: 'Access accredited CBT therapists, take evidence-based mental health self-assessments (PHQ-9 & GAD-7), and use interactive clinical CBT tools for self-improvement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Auto-reload once on ChunkLoadError (stale deployment cache recovery) */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('error', function(e) {
            if (e.message && e.message.indexOf('ChunkLoadError') !== -1 || 
                (e.message && e.message.indexOf('Loading chunk') !== -1)) {
              var reloaded = sessionStorage.getItem('chunk_reload');
              if (!reloaded) {
                sessionStorage.setItem('chunk_reload', '1');
                window.location.reload();
              }
            }
          });
          window.addEventListener('unhandledrejection', function(e) {
            if (e.reason && e.reason.name === 'ChunkLoadError') {
              var reloaded = sessionStorage.getItem('chunk_reload');
              if (!reloaded) {
                sessionStorage.setItem('chunk_reload', '1');
                window.location.reload();
              }
            }
          });
        ` }} />
      </head>
      <body>
        <Navbar />
        <main>
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </main>
        <Footer />
        <BookingModal />
        <BookingSuccessModal />
      </body>
    </html>
  );
}
