import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to <span className="text-green-400">AskFlexi</span>
            </h1>
            <p className="text-xl mb-8">
              Your AI-powered assistant for FlutterFlow - Build your vision with no-code!
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/askFlexi%2FScreenshot%202024-10-19%2015.51.13.png?alt=media&token=09380d8b-5a0d-40a6-87f9-c9e9cba34e37"
              alt="AskFlexi Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;