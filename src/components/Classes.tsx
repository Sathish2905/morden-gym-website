import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const classTypes = [
  {
    title: 'HIIT Training',
    time: '6:00 AM - 7:00 AM',
    trainer: 'Sarah Johnson',
    capacity: '20 spots',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Yoga Flow',
    time: '8:00 AM - 9:00 AM',
    trainer: 'Michael Chen',
    capacity: '15 spots',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Strength Training',
    time: '10:00 AM - 11:00 AM',
    trainer: 'David Miller',
    capacity: '12 spots',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Spin Class',
    time: '5:00 PM - 6:00 PM',
    trainer: 'Emma Wilson',
    capacity: '18 spots',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Classes = () => {
  return (
    <section id="classes" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-red-600">Classes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from a variety of classes designed to help you reach your fitness goals.
            Whether you're a beginner or an advanced athlete, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classTypes.map((classItem) => (
            <div
              key={classItem.title}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {classItem.title}
                </h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{classItem.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{classItem.trainer}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                    {classItem.intensity} Intensity
                  </span>
                </div>
                <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Book Class
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#schedule"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;