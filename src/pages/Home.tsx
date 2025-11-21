import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';
import { AnimatedGridPattern } from '../components/magicui/animated-grid-pattern';
import { BlurFade } from '../components/magicui/blur-fade';
import { BorderBeam } from '../components/magicui/border-beam';
import { BoxReveal } from '../components/magicui/box-reveal';

export default function Home() {
  const highlightedProjects = projects.slice(0, 2);

  const skills = {
    languages: ['Python', 'Java', 'Javascript', 'Typescript', 'C++', 'R', 'SQL', 'Kotlin', 'HTML', 'CSS'],
    frameworks: ['GraphQL', 'PostgreSQL', 'Heroku', 'Vercel', 'Django', 'Next.js', 'Express', 'Vite', 'React', 'Node.js'],
    tools: ['Linux', 'AWS', 'Azure', 'Git', 'Docker', 'MongoDB']
  };

  return (
    <>
      <SEO
        title="Home - Gavin Zhang"
        description="Software Engineer specializing in web and backend development. Explore my portfolio of projects showcasing automation, healthcare tech, and more."
        keywords="software engineer, web development, backend development, Python, React, TypeScript, portfolio, automation, healthcare technology"
      />
      <div
        className="min-h-screen w-full relative overflow-hidden"
      >
      
      {/* --- REMOVED: Doodled Arrow and Resume Callout --- */}
      
      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-20 pb-32">
        {/* MagicUI Animated Grid Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.05}
          duration={3}
          repeatDelay={1}
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] fill-blue-600/5 stroke-blue-600/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 text-center md:text-left"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-80 h-[30rem] mb-8 md:mb-0 rounded-3xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
          >
            <img
              src="/images/Profile.JPG"
              alt="Gavin Zhang"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-start md:max-w-3xl">
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                Hi, I'm Gavin!
              </h1>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <p className="text-xl md:text-2xl text-gray-700 mb-0 leading-relaxed">
                A passionate Software Engineer specializing in building exceptional digital experiences
                with modern technologies.
              </p>
            </BlurFade>
          </div>
        </motion.div>
      </section>

      {/* --- HIGHLIGHTED WORKS --- */}
      <section id="highlighted-works" className="py-20 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">Highlighted Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlightedProjects.map((project) => (
              <Link
                to={`/project/${project.slug}`}
                key={project.id}
                className="w-full cursor-pointer group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-white group-hover:shadow-3xl transition-shadow duration-300">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-4xl font-extrabold mb-2 text-white group-hover:text-blue-200 transition-colors duration-300 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-xl text-white mb-4 drop-shadow-md">
                      {project.accomplishment}
                    </p>
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view full project details
                    </p>
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/20 rounded text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* MagicUI BorderBeam Effect */}
                  <BorderBeam
                    size={150}
                    duration={8}
                    colorFrom="#3B82F6"
                    colorTo="#60A5FA"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">My Tech Stack</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            className="p-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:border-blue-500 border-2 border-transparent"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BoxReveal boxColor="#3B82F6" duration={0.5} width="100%">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-blue-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#3B82F6" duration={0.5} width="100%">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Frameworks & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-blue-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor="#3B82F6" duration={0.5} width="100%">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 hover:bg-blue-100"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </BoxReveal>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link
              to="https://www.linkedin.com/in/gavin-x-zhang/"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-md"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}