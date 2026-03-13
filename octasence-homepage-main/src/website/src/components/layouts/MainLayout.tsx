'use client';
import React from 'react';

import PageTransitionWrapper from '@/components/PageTransitionWrapper';
import { cn } from '@/lib/utils';

import ChatbotWidget from '../ChatbotWidget';
import ActionButtons from './ActionButtons';
import Footer from './Footer';
import Highlight from './Highlight';
import Navbar from './Navbar';
import NewsLetter from './NewsLetter';

interface MainLayoutProps {
  children: React.ReactNode;
  // Optional full-width element rendered above the centered container (e.g., full-width hero)
  topFullWidth?: React.ReactNode;
  noPaddingTop?: boolean;
}

const MainLayout = ({ children, topFullWidth, noPaddingTop }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className={cn("flex-1 pb-8", !noPaddingTop && "pt-28")}>
        <PageTransitionWrapper>
          {/* Optional full-width area inserted before the centered container */}
          {topFullWidth}

          <div className="text-gray-700 w-full">{children}</div>

          {/* Highlight Section */}
          <section className="mt-32 mb-8">
            <Highlight />
          </section>

          {/* Action Buttons Section */}
          <section className="my-8">
            <ActionButtons />
          </section>
        </PageTransitionWrapper>
      </main>

      <footer>
        {/* Newsletter Section */}
        <section className="my-16">
          <NewsLetter />
        </section>

        {/* Footer Section */}
        <Footer />
      </footer>

      {/* Global Chatbot Widget - visible on every page */}
      <ChatbotWidget />
    </div>
  );
};

export default MainLayout;
