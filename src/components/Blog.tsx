import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: '10 Tips for Building Muscle Mass',
    excerpt: 'Learn the essential strategies for gaining muscle effectively...',
    image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024',
    category: 'Training'
  },
  {
    title: 'Nutrition Guide for Weight Loss',
    excerpt: 'Discover the best foods to include in your diet for optimal results...',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 12, 2024',
    category: 'Nutrition'
  },
  {
    title: 'Benefits of Morning Workouts',
    excerpt: 'Find out why early morning exercise might be your best choice...',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 10, 2024',
    category: 'Lifestyle'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest from the <span className="text-red-600">Blog</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest fitness tips, nutrition advice, and gym news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-600 text-sm">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-600 hover:text-red-500"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;