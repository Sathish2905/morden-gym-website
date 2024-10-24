import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    role: 'Member since 2022',
    quote: 'Joining Power Gym was the best decision Ive made. Lost 30lbs and gained confidence!',
    rating: 5
  },
  {
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    role: 'Member since 2023',
    quote: 'The trainers here are exceptional. They really care about your progress.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    role: 'Member since 2021',
    quote: 'Great community, amazing facilities. Worth every penny!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Success <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Read what our members have to say about their journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-800 rounded-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-red-600 opacity-50" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;