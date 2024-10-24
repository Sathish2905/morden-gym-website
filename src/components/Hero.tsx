import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/414874938.sd.mp4?s=cb465e9ebb00f601fa64e7983e5e55d6e0d2fd86&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Body,<br />
            <span className="text-red-600">Transform Your Life</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Join our state-of-the-art facility and start your fitness journey today. 
            Expert trainers, premium equipment, and a supportive community await you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#join"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-red-700 transition-all w-full sm:w-auto"
            >
              Start Your Journey <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#video"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-gray-700 transition-all w-full sm:w-auto"
            >
              Watch Video <Play className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;