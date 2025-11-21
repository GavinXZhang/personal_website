import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import { MagicCard } from '../components/magicui/magic-card';
import { TextAnimate } from '../components/magicui/text-animate';
import { GridPattern } from '../components/magicui/grid-pattern';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'automation', name: 'Automation' },
  { id: 'healthcare', name: 'Healthcare' }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEO
        title="Projects - Gavin Zhang"
        description="Explore my portfolio of software engineering projects including automation solutions, healthcare applications, and game development."
        keywords="projects, portfolio, automation, healthcare tech, web applications, React projects, Python automation"
      />
      <div className="min-h-screen py-8 md:py-12 relative">
        {/* Subtle Grid Pattern Background */}
        <GridPattern
          width={40}
          height={40}
          className="absolute inset-0 -z-10 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]"
        />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
            >
              My Projects
            </TextAnimate>
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
            Here are some of my recent projects that showcase my skills and experience in building innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className="group cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MagicCard
                  gradientSize={250}
                  gradientFrom="#3B82F6"
                  gradientTo="#60A5FA"
                  gradientOpacity={0.15}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1"
                >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = project.demo;
                    }}
                  />
                </div>
                <div className="p-4 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2 md:gap-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs md:text-sm font-medium text-green-600 bg-green-50 px-2 md:px-3 py-1 rounded-full self-start">
                      {project.accomplishment}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 md:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-sm md:text-base text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                      View Details →
                    </span>
                    <div className="flex space-x-2 md:space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                </MagicCard>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
