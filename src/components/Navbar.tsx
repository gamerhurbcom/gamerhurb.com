import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-white">GamerHurb</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Início
            </Link>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </a>
            <Link
              to="/auth"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Começar
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="md:hidden bg-black"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Início
          </Link>
          <a
            href="#features"
            className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Recursos
          </a>
          <Link
            to="/auth"
            className="block px-3 py-2 text-purple-500 hover:text-purple-400 transition-colors"
          >
            Começar
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};