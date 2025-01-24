import React from 'react';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center glitch" data-text="ACTIVE_PROJECTS">
          ACTIVE_PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black/40 backdrop-blur-sm rounded-sm border border-[#003B00] hover:border-[#00FF00] transition-colors overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 glitch" data-text={project.title}>
                  {project.title}
                </h3>
                <p className="text-[#00FF00]/80 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#0066FF] glow-blue">ROLE:</span>
                  <span className="text-sm text-[#00FF00]/80 ml-2">{project.role}</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#0066FF] glow-blue">IMPACT:</span>
                  <p className="text-sm text-[#00FF00]/80">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#003B00] text-[#00FF00] border border-[#00FF00] rounded-sm text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-[#00FF00] hover:text-[#0066FF] transition-colors glitch"
                  data-text="ACCESS_PROJECT"
                >
                  ACCESS_PROJECT <ExternalLink size={16} className="ml-1 glow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;