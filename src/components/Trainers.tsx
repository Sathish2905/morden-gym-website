import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'HIIT & Functional Training',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'ACE Certified Personal Trainer with 7+ years of experience in high-intensity training.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Michael Chen',
    specialty: 'Yoga & Meditation',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Certified Yoga Instructor specializing in Vinyasa and mindfulness practices.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'David Miller',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'NASM Certified Personal Trainer with expertise in powerlifting and bodybuilding.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Emma Wilson',
    specialty: 'Cardio & Spin',
    image: 'https://images.unsplash.com/photo-1609899537878-39d4a48fad71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Certified Spin Instructor and endurance training specialist.',
    social: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-red-600">Expert Trainers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our certified trainers are here to help you achieve your fitness goals.
            With years of experience and diverse specialties, you'll find the perfect
            match for your training needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-red-600 text-sm mb-3">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>
                <div className="flex space-x-4">
                  <a href={trainer.social.instagram} className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.twitter} className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.linkedin} className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;