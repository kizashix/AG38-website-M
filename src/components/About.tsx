import React from 'react';
import { Shield, Lock, Cpu, Network } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#800080] flex items-center justify-center gap-3">
            <Shield className="w-8 h-8" />
            SYSTEM ARCHITECT // SECURITY INNOVATOR
          </h2>

          <div className="space-y-8 text-lg">
            <div className="bg-black/40 border border-[#800080] p-6 rounded-sm">
              <p className="mb-6">
                At the forefront of cybersecurity innovation, I architect and implement cutting-edge security solutions that safeguard critical infrastructure and sensitive data. With over 5 years of transformative experience at industry-leading organizations including JIGPC and Jazan Gas Projects Company, I specialize in developing sophisticated security frameworks that merge technical excellence with strategic foresight.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-[#FF69B4] font-bold mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5" /> Core Expertise
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      Advanced DLP Implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      Risk Assessment & Mitigation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      Security Policy Development
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#FF69B4] font-bold mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5" /> Technical Mastery
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      Infrastructure Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      ITIL Service Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#800080]">▹</span>
                      Microsoft 365 Security Suite
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-[#FF69B4] font-bold mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5" /> Key Achievements
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#800080]">▹</span>
                    Spearheaded enterprise-wide DLP solutions implementation, enhancing data security and regulatory compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#800080]">▹</span>
                    Achieved 99.9% system uptime through proactive monitoring and infrastructure optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#800080]">▹</span>
                    Reduced incident response time by 30% via streamlined processes and enhanced security protocols
                  </li>
                </ul>
              </div>

              <p className="text-[#FF69B4] font-bold">
                My vision is to redefine the boundaries of cybersecurity by developing innovative solutions that not only protect but empower organizations to thrive in an increasingly complex digital landscape. Through the convergence of advanced technology and strategic insight, I aim to build resilient security frameworks that anticipate and adapt to emerging threats while enabling sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;