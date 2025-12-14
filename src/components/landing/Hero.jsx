import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Fish, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Карельское озеро"
          className="w-full h-[120vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1e3a5f]/60 to-[#1e3a5f]/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c9a962]/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#c9a962]/20 backdrop-blur-xl border border-[#c9a962]/30 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-[#c9a962]" />
              <span className="text-white font-medium">Лучшая база Карелии 2024</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-none">
              Пя <span className="text-[#c9a962]">Аузерия</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-8" />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <p className="text-2xl md:text-4xl text-white/95 mb-4 font-light tracking-wide">
              Рыболовная база премиум-класса
            </p>
            <p className="text-lg md:text-xl text-[#c9a962]/90 max-w-2xl mx-auto leading-relaxed">
              Откройте для себя трофейную рыбалку на легендарном Пяозере 
              в окружении нетронутой природы Карелии
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Fish, title: 'Трофейная рыбалка', desc: '6+ видов рыб' },
              { icon: Sparkles, title: 'Премиум комфорт', desc: 'От 5000₽/сутки' },
              { icon: Award, title: '15+ лет опыта', desc: '2000+ гостей' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-[#c9a962] mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="bg-[#c9a962] hover:bg-[#d4b573] text-white text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-[#c9a962]/50 transition-all duration-300 hover:scale-105 font-semibold group"
            >
              <span>Забронировать</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2"
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('cabins')}
              variant="outline"
              className="bg-white/5 backdrop-blur-xl text-white border-2 border-white/40 hover:bg-white/15 hover:border-[#c9a962] text-lg px-10 py-7 rounded-xl transition-all duration-300"
            >
              Наши домики
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group z-20"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Листайте вниз</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}