import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'О базе', id: 'about' },
    { label: 'Домики', id: 'cabins' },
    { label: 'Рыбалка', id: 'fishing' },
    { label: 'Услуги', id: 'services' },
    { label: 'Галерея', id: 'gallery' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-lg flex items-center justify-center">
              <span className="text-[#c9a962] font-bold text-xl">ПА</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1e3a5f]">Пя Аузерия</h1>
              <p className="text-xs text-gray-600">База отдыха на Пяозере</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center gap-6"
          >
            <a href="tel:+79211234567" className="flex items-center gap-2 text-gray-700 hover:text-[#1e3a5f] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 921 123-45-67</span>
            </a>
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-[#c9a962] hover:bg-[#b8965a] text-white"
            >
              Забронировать
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-[#1e3a5f] transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t space-y-3">
                <a href="tel:+79211234567" className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+7 921 123-45-67</span>
                </a>
                <Button
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-[#c9a962] hover:bg-[#b8965a] text-white"
                >
                  Забронировать
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}