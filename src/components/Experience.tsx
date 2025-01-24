import React from 'react';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 grid-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center glitch" data-text="SYSTEM_LOGS">
            SYSTEM_LOGS
          </h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-[#003B00]">
                <div className="absolute -left-3 top-0">
                  <div className="bg-[#003B00] p-2 rounded-sm border border-[#00FF00]">
                    <Briefcase size={20} className="text-[#00FF00] glow" />
                  </div>
                </div>
                <div className="mb-1 text-[#0066FF] font-semibold glow-blue">
                  {exp.period}
                </div>
                <h3 className="text-xl font-bold glitch" data-text={exp.role}>
                  {exp.role}
                </h3>
                <div className="text-[#00FF00]/80 mb-4">{exp.company}</div>
                <ul className="space-y-2 text-[#00FF00]/90">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">{'>'}</span>
                      <span className="hover:text-[#00FF00] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;