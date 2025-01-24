import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center glitch" data-text="ESTABLISH_CONNECTION">
            ESTABLISH_CONNECTION
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#00FF00] mb-1 glitch" data-text="IDENTIFIER">
                IDENTIFIER
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/60 border border-[#003B00] focus:border-[#00FF00] rounded-sm text-[#00FF00] placeholder-[#003B00] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#00FF00] mb-1 glitch" data-text="COMM_CHANNEL">
                COMM_CHANNEL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/60 border border-[#003B00] focus:border-[#00FF00] rounded-sm text-[#00FF00] placeholder-[#003B00] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#00FF00] mb-1 glitch" data-text="TRANSMISSION">
                TRANSMISSION
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-black/60 border border-[#003B00] focus:border-[#00FF00] rounded-sm text-[#00FF00] placeholder-[#003B00] transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#003B00] border border-[#00FF00] text-[#00FF00] rounded-sm hover:bg-[#00FF00] hover:text-black transition-colors flex items-center justify-center gap-2 glitch"
              data-text="TRANSMIT_MESSAGE"
            >
              TRANSMIT_MESSAGE
              <Send size={20} className="glow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;