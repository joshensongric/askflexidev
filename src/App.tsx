import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Zap, Sparkles, Rocket, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-background-dark text-text-primary-dark' : 'bg-background-light text-text-primary-light'} transition-colors duration-300`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/askFlexi%2FProfile-Image-White.png?alt=media&token=ca58a067-4ff0-422c-bd22-89c90c36cb64" 
            alt="AskFlexi Logo" 
            className="h-8" 
          />
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-sm hover:text-primary transition duration-300">Features</a>
            <a href="#" className="text-sm hover:text-primary transition duration-300">Pricing</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700 transition duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#" className="bg-primary text-background-dark px-4 py-2 rounded-full text-sm hover:bg-secondary transition duration-300">
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  Welcome to <span className="text-primary">AskFlexi</span>
                </h1>
                <p className="text-xl mb-8 animate-slide-up">
                  Your AI-powered assistant for FlutterFlow - Build your vision with no-code!
                </p>
                <a href="#" className="bg-primary text-background-dark px-8 py-3 rounded-full text-lg hover:bg-secondary transition duration-300 inline-flex items-center animate-slide-up">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
              <div className="md:w-1/2" ref={heroRef}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/askFlexi%2FScreenshot%202024-10-19%2015.51.13.png?alt=media&token=09380d8b-5a0d-40a6-87f9-c9e9cba34e37"
                  alt="AskFlexi Dashboard"
                  className="rounded-lg shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
          <div className="particle-container"></div>
        </section>

        <section id="features" className={`py-20 ${darkMode ? 'bg-background-dark' : 'bg-background-light'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-quicksand font-semibold mb-12 text-center">Why Choose AskFlexi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code size={40} />}
                title="No Coding Required"
                description="Build your app without writing a single line of code. AskFlexi guides you through the entire process."
                darkMode={darkMode}
              />
              <FeatureCard
                icon={<Zap size={40} />}
                title="AI-Powered Assistance"
                description="Get intelligent suggestions and solutions tailored to your project needs."
                darkMode={darkMode}
              />
              <FeatureCard
                icon={<Sparkles size={40} />}
                title="Beautiful UI Components"
                description="Access a library of sleek, iOS-style icons and components to make your app shine."
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        <section className={`py-20 ${darkMode ? 'bg-tertiary' : 'bg-secondary'}`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-quicksand font-semibold mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl mb-10">Join thousands of creators who have built amazing apps with AskFlexi and FlutterFlow.</p>
            <a href="#" className="bg-primary text-background-dark px-8 py-3 rounded-full text-lg hover:bg-secondary transition duration-300 inline-flex items-center">
              Launch Your Project
              <Rocket className="ml-2" size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer className={`${darkMode ? 'bg-background-dark text-text-secondary-dark' : 'bg-background-light text-text-secondary-light'} py-8`}>
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/flexpertsdev-pb6ym6.appspot.com/o/askFlexi%2FProfile-Image-White.png?alt=media&token=ca58a067-4ff0-422c-bd22-89c90c36cb64" 
            alt="AskFlexi Logo" 
            className="h-8 mx-auto mb-4" 
          />
          <p>&copy; 2024 AskFlexi by Flexperts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; darkMode: boolean }> = ({ icon, title, description, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-[#1E2028]' : 'bg-white'} p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-primary/20 hover:scale-105`}>
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-quicksand font-semibold mb-2">{title}</h3>
      <p className={darkMode ? 'text-text-secondary-dark' : 'text-text-secondary-light'}>{description}</p>
    </div>
  );
};

export default App;