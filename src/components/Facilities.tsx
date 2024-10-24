import React from 'react';
import { Dumbbell, Users, Coffee, Droplets } from 'lucide-react';

const facilities = [
  {
    title: 'Training Area',
    description: 'State-of-the-art equipment for strength and cardio training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Dumbbell
  },
  {
    title: 'Group Fitness',
    description: 'Spacious studios for various group classes and activities',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Users
  },
  {
    title: 'Lounge Area',
    description: 'Comfortable space to relax and socialize after workouts',
    image: 'https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Coffee
  },
  {
    title: 'Locker Rooms',
    description: 'Modern locker rooms with showers and amenities',
    image: 'https://images.unsplash.com/photo-1543109740-4bdb38fda756?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    icon: Droplets
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-red-600">Facilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our premium facilities designed to enhance your workout experience
            and help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-64 w-full">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <facility.icon className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#tour"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Book a Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;