export interface Project {
  id: number;
  slug: string;
  title: string;
  accomplishment: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  impact: Record<string, string>;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'cellenics',
    title: 'Cellenics',
    accomplishment: 'Saved company $10,000 annually',
    description: 'Engineered a data-processing pipeline using Python to automate the formatting and validation of high-volume genomics data for an open-source analytics platform.',
    fullDescription: `"Cellenics is an open-source analytics tool designed for single-cell RNA sequencing data. A significant challenge was that valuable public datasets couldn't be analyzed in Cellenics because they existed in diverse and incompatible formats.

My role was to engineer the solution: a set of intelligent Python scripts to serve as a universal data translator. These scripts automatically parse, validate, and reformat large volumes of genomics documents from various sources, ensuring 100% data integrity without manual intervention.

This automation pipeline was critical for expanding the platform's capabilities, making new datasets discoverable and ready for scientific analysis."`,
    image: '/images/Cellenics.png',
    technologies: ['Python', 'Automation', 'Pandas', 'NumPy', 'R', 'AWS'],
    github: 'https://github.com/GavinXZhang/document-scripts',
    demo: '#',
    features: [
      'Automated document formatting and validation',
      'Real-time processing capabilities',
      'Integration with existing company systems',
      'Scalable architecture for high-volume processing',
      'Comprehensive logging and reporting'
    ],
    challenges: [
      'Handling diverse document formats and structures',
      'Ensuring 100% accuracy in automated processing',
      'Optimizing performance for large file processing'
    ],
    impact: {
      cost: '$10,000 annual savings',
      time: '35% improvment in daily data processing',
      scalability: 'Handles 10x more documents without additional spending'
    },
    category: 'automation'
  },
  {
    id: 2,
    slug: 'als',
    title: 'ALS Children Hospital Website',
    accomplishment: 'Secured renewal of annual contract',
    description: 'Led the development and maintenance of a vital website for ALS Children Hospital, enhancing patient access to information and services.',
    fullDescription: `The ALS Children Hospital Website project was a critical initiative to modernize the hospital's digital presence and improve patient care accessibility.
    
    This comprehensive web application provides families and patients with easy access to medical resources, appointment scheduling, and educational materials. The platform was designed with accessibility in mind, ensuring that all users, regardless of their technical abilities or disabilities, could navigate and use the services effectively.
    
    The project's success led to improved patient satisfaction scores and streamlined hospital operations, ultimately securing the renewal of the annual development contract.`,
    image: '/images/als.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'CMS', 'TypeScript', 'Strapi', 'Oauth', 'Azure'],
    github: 'https://github.com/BU-Spark/se-bch-als-resource-app',
    demo: 'https://se-bch-als-resource-app.vercel.app/',
    features: [
      'Patient resource management system',
      'Educational content management',
      'Mobile-responsive design',
    ],
    challenges: [
      'Meeting strict healthcare compliance requirements',
      'Ensuring accessibility for users with disabilities',
      'Integrating with existing hospital management systems',
      'Optimizing performance for users with limited internet access'
    ],
    impact: {
      satisfaction: '40% increase in patient satisfaction',
      usage: '300% increase in online resource usage',
      contract: 'Secured annual contract renewal'
    },
    category: 'healthcare'
  },
  {
    id: 3,
    slug: '2048-clone',
    title: '2048 Clone',
    accomplishment: 'Recreated the 2048 game with vanilla JavaScript',
    description: 'A clone of the classic 2048 puzzle game, built to demonstrate core JavaScript game logic and state management.',
    fullDescription: `This project is a complete, functional clone of the popular 2048 puzzle game. It demonstrates core JavaScript logic for game state management, user input handling, and grid manipulation.
    
    The entire game is built from scratch with no external frameworks, focusing on efficient algorithms for tile merging and scoring.`,
    image: '/images/2048.png', // This path is from your file screenshot
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/GavinXZhang/2048_clone',
    demo: 'https://2048-clone-cyan.vercel.app/', // This was the demo link in your GitHub repo
    features: [
      'Full 2048 game logic',
      'Score tracking',
      'Game over detection',
      'Keyboard controls'
    ],
    challenges: [
      'Implementing the tile merging logic in four directions',
      'Efficiently managing and updating the game board state',
      'Spawning new tiles in random empty cells'
    ],
    impact: {
      learning: 'Demonstrates strong grasp of JavaScript fundamentals'
    },
    category: 'Game Development'
  }

];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get project by id
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};
