import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { title, description, reviews } = homeContent.testimonials;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-neutral-dark/5 border border-neutral-dark/10 relative">
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-medium relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {review.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-foreground/60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
