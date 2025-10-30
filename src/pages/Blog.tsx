import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    title: 'Building a Modern React Portfolio',
    excerpt: 'A comprehensive guide on creating a portfolio website using React, TypeScript, and Tailwind CSS.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'The Power of TypeScript in Large Applications',
    excerpt: 'How TypeScript improves code quality and developer experience in large-scale applications.',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'TypeScript'
  },
  {
    id: 3,
    title: 'Optimizing React Performance',
    excerpt: 'Best practices and techniques for improving the performance of your React applications.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'React'
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights about software development
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
