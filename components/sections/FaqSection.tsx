"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const { title, description, questions } = homeContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {questions.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-neutral-dark/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-neutral-dark/5 text-right transition-colors"
                >
                  <span className="font-bold text-lg text-primary">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 py-4 opacity-100 border-t border-neutral-dark/10' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
