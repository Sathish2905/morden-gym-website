import React from 'react';
import { Clock, Users, Award, Dumbbell } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train any time that suits your schedule with our round-the-clock facility access'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Work with certified professionals who are passionate about helping you achieve your goals'
  },
  {
    icon: Award,
    title: 'Premium Equipment',
    description: 'Access top-of-the-line fitness equipment and modern training facilities'
  },
  {
    icon: Dumbbell,
    title: 'Diverse Classes',
    description: 'Choose from a wide range of classes including HIIT, yoga, strength training, and more'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-red-600">Power Gym</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            More than just a gym, we're a community dedicated to helping you achieve
            your fitness goals through expert guidance, state-of-the-art equipment,
            and a motivating atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all"
            >
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Gym facilities"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Your Fitness Journey Starts Here
            </h3>
            <p className="text-gray-400">
              At Power Gym, we believe that fitness is not just about working out;
              it's about creating a sustainable, healthy lifestyle. Our expert
              trainers are here to guide you every step of the way, whether you're
              just starting or looking to take your fitness to the next level.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                Personalized training programs
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                Nutrition guidance and support
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                Regular progress tracking
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-red-600 rounded-full mr-3"></span>
                Supportive community environment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;