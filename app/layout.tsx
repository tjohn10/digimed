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
