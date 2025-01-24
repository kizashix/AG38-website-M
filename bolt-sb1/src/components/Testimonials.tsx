import React from 'react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 grid-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center glitch" data-text="USER_FEEDBACK">
          USER_FEEDBACK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black/40 backdrop-blur-sm p-6 rounded-sm border border-[#003B00] hover:border-[#00FF00] transition-colors relative group"
            >
              <Quote className="absolute top-4 right-4 text-[#003B00] group-hover:text-[#00FF00] transition-colors" size={40} />
              <p className="text-[#00FF00]/90 mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-sm object-cover border border-[#003B00] group-hover:border-[#00FF00] transition-colors"
                />
                <div className="ml-4">
                  <div className="font-semibold text-[#00FF00] glitch" data-text={testimonial.name}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#0066FF] glow-blue">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;