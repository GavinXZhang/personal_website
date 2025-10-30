import { motion } from 'framer-motion';

export default function About() {
  
  // Note: The smooth scroll function was removed as it wasn't being used.

  return (
    // This outer div provides the top/bottom padding for the whole page
    <div className="min-h-screen pt-20 pb-32">
      {/* This container div centers your content and limits its max width */}
      <div className="container mx-auto px-4">
        {/* This motion div is the main wrapper for all your page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto" // A good width for reading
        >
        
          {/* --- SECTION 1: ABOUT ME --- */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, thanks for stopping by. My name is Gavin, and I'm a software engineer. But more than that, I'm someone who is driven to help people.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My core passion is to provide value. For me, there is no better feeling than seeing someone's relief after I've helped them with a solution. That moment where a complex problem just *clicks* and you see the positive impact you've made—that's when I'm happiest.
            </p>
          </section>

          {/* --- SECTION 2: PATH TO TECH --- */}
          {/* Removed the white card <motion.div> wrapper */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray">From Passion to Profession</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I found that software engineering is the perfect way to deliver that value at scale. I specialize in web and backend development, building the robust and efficient systems that power a great user experience.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As a developing engineer, I'm always learning. A key moment for me was during my time working on the ALS website. I learned that speaking clearly with my PM and asking questions to resolve any misunderstanding wasn't just helpful—it was the only way to truly deliver a product that satisfied the customer's needs. That experience taught me how to collaborate and build for a real-world impact.
            </p>
            <p className="text-gray-700 font-semibold leading-relaxed">
              While working on side projects, I am currently seeking an entry-level software engineering role where I can contribute meaningfully to a team and continue to grow as a developer.
            </p>
          </section>

          {/* --- SECTION 3: OUTSIDE OF CODE (WITH YOUR IMAGES) --- */}
          {/* Removed the white card <motion.div> wrapper */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray">Outside of Code</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              When I'm not at the keyboard, I like to play video games, watch and play basketball, and photograph the wonderful nature of the world. Here are a couple of my favorite shots.
            </p>
            
            {/* This grid will place your 2 images side-by-side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="/images/dog1.JPG" // <-- REPLACE THIS PATH
                alt="Description of your photo" 
                className="rounded-lg shadow-md w-full h-auto"
              />
              <img 
                src="/images/water1.JPG" // <-- REPLACE THIS PATH
                alt="Description of your photo" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </section>

          {/* --- SECTION 4: CALL TO ACTION --- */}
          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Please go check out my other projects, download my resume if you'd like to learn more about me professionally, and lastly, I would love to connect for a coffee chat.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Thanks for stopping by!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="/projects"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                See My Work
              </motion.a>
              <motion.a 
                href="/resume.pdf" // <-- Make sure this path is correct
                download="/Gavin_W_X_Zhang_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Download Resume
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/gavin-x-zhang/" // <-- Make sure this is your LinkedIn
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
              >
                Coffee Chat (LinkedIn)
              </motion.a>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}