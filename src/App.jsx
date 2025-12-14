import React, { useEffect, useRef, useState } from 'react';
import { Toaster, toast } from 'sonner';
import 'sonner';
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Calendar, CheckCircle2, Sparkles, Users, Bed, CheckCircle, Wifi, Coffee, ChevronLeft, ChevronRight, Trees, Fish, Home as HomeIcon, Mountain, MapPin as MapPinIcon, Car, Plane, Train, Navigation, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

// Utils
const cn = (...classes) => classes.filter(Boolean).join(' ');

// UI primitives
const Button = React.forwardRef(({ className, variant = 'default', size = 'md', type = 'button', ...props }, ref) => {
  const variants = {
    default: 'bg-[#1e3a5f] text-white hover:bg-[#2c5282]',
    outline: 'border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent'
  };
  const sizes = {
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  };
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c9a962] disabled:opacity-60 disabled:cursor-not-allowed',
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    />
  );
});
Button.displayName = 'Button';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 disabled:opacity-60',
      className
    )}
    {...props}
  />
));
Input.displayName = 'Input';

const Textarea = React.forwardRef(({ className, rows = 3, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 disabled:opacity-60',
      className
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

const Label = React.forwardRef(({ className, htmlFor, ...props }, ref) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn('text-sm font-medium text-gray-800', className)}
    {...props}
  />
));
Label.displayName = 'Label';

// Header
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    { label: 'Контакты', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
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

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
};

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Карельское озеро"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Пя Аузерия</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">База отдыха на берегу Пяозера</p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Уединённое место в сердце Карелии для незабываемой рыбалки и отдыха на природе
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('cabins')}
            className="bg-[#c9a962] hover:bg-[#b8965a] text-white text-lg px-8 py-6 rounded-full"
          >
            Выбрать домик
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 rounded-full"
          >
            Подробнее
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5 text-[#c9a962]" />
            <span className="text-white font-medium">Берег Пяозера</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Award className="w-5 h-5 text-[#c9a962]" />
            <span className="text-white font-medium">Трофейная рыбалка</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-[#c9a962]" />
            <span className="text-white font-medium">До 30 гостей</span>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const images = [
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90', title: 'Панорама Пяозера на закате' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=90', title: 'Тихие утренние воды и рыбалка' },
    { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=90', title: 'Лесные тропы в шаге от домиков' }
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const features = [
    { icon: Trees, title: 'Дикая природа', description: 'Нетронутая карельская природа и чистейший воздух' },
    { icon: Fish, title: 'Трофейная рыбалка', description: 'Щука, окунь, хариус, форель в изобилии' },
    { icon: HomeIcon, title: 'Комфортные домики', description: 'Современные условия в окружении дикой природы' },
    { icon: Mountain, title: 'Уединение', description: 'Далеко от городской суеты и шума' }
  ];

  const handlePrev = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const textBlock = (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-[#1e3a5f]">Почему выбирают нас?</h3>
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            <strong>Расположение:</strong> База находится на живописном берегу Пяозера — одного из самых чистых и рыбных озёр Карелии
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            <strong>Инфраструктура:</strong> Комфортные домики с современными удобствами, баня, лодочная станция, беседки для отдыха
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            <strong>Рыбалка:</strong> Профессиональные гиды, современные лодки, трофейные экземпляры щуки, окуня, хариуса и форели
          </p>
        </div>
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            <strong>Сервис:</strong> Внимательный персонал, индивидуальный подход, организация трансфера и экскурсий
          </p>
        </div>
      </div>
    </div>
  );

  const slider = (
    <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl group">
      <img
        src={images[currentImage].url}
        alt={images[currentImage].title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full backdrop-blur-md text-sm mb-3">
          <span className="w-2 h-2 rounded-full bg-[#c9a962]" />
          {currentImage + 1} / {images.length}
        </div>
        <p className="text-xl font-semibold drop-shadow">{images[currentImage].title}</p>
      </div>
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#1e3a5f] p-3 rounded-full shadow-lg transition"
        aria-label="Предыдущее фото"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#1e3a5f] p-3 rounded-full shadow-lg transition"
        aria-label="Следующее фото"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentImage(idx)}
            className={`w-2.5 h-2.5 rounded-full transition ${idx === currentImage ? 'bg-[#c9a962]' : 'bg-white/50'}`}
            aria-label={`Перейти к изображению ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">О базе отдыха</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Пя Аузерия — это уникальная база отдыха на берегу легендарного Пяозера в Карелии. Мы создали идеальное место для тех, кто ищет настоящий отдых на природе, трофейную рыбалку и незабываемые впечатления.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-[#c9a962]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="grid md:grid-cols-2 gap-12 items-center">
          {slider}
          {textBlock}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }} className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {textBlock}
          {slider}
        </motion.div>
      </div>
    </section>
  );
};

const Fishing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const stats = [
    { value: '15 кг', label: 'трофейная щука' },
    { value: '2 кг', label: 'крупный окунь' },
    { value: '30+', label: 'видов рыбы' },
    { value: '100%', label: 'чистая вода' }
  ];

  const plans = [
    {
      title: 'Утренний выход',
      time: '05:00 — 09:00',
      desc: 'Ранний клёв, рыбалка на ямах и бровках',
      price: 'от 3 000 ₽',
      badge: 'Популярно'
    },
    {
      title: 'Дневной тур',
      time: '11:00 — 16:00',
      desc: 'Троллинг, поиск стайного окуня и хариуса',
      price: 'от 4 500 ₽'
    },
    {
      title: 'Вечерний выход',
      time: '18:00 — 22:00',
      desc: 'Закатный клев, рыбалка на мелководье и траве',
      price: 'от 3 500 ₽'
    }
  ];

  return (
    <section id="fishing" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#c9a962]/20 text-[#1e3a5f] px-4 py-2 rounded-full font-semibold">
              Лучшие места
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
              Рыбалка на Пяозере
              <span className="text-[#c9a962]"> — трофеи ждут</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Пяозеро — одно из самых рыбных озёр Карелии. Наши гиды знают все точки, где водится трофейная щука, крупный окунь, хариус и озёрная форель.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="bg-white shadow-lg rounded-2xl p-4 text-center border border-gray-100">
                  <div className="text-3xl font-bold text-[#c9a962] mb-1">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1e3a5f]/10 via-transparent to-[#c9a962]/10 blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200&q=90"
                alt="Рыбалка на Пяозере"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Рыбалка с гидом</p>
                  <p className="text-xl font-bold text-[#1e3a5f]">от 5 000 ₽</p>
                </div>
                <Button className="bg-[#c9a962] hover:bg-[#b8965a] text-white">Забронировать</Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, idx) => (
            <div key={plan.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              {plan.badge && <div className="inline-block bg-[#c9a962]/15 text-[#c9a962] px-3 py-1 rounded-full text-sm font-semibold mb-3">{plan.badge}</div>}
              <h4 className="text-2xl font-bold text-[#1e3a5f] mb-2">{plan.title}</h4>
              <p className="text-[#c9a962] font-semibold mb-2">{plan.time}</p>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#1e3a5f]">{plan.price}</span>
                <Button size="md" className="bg-[#1e3a5f] hover:bg-[#2c5282] text-white">
                  Выбрать
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Cabins = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState({ cabin: null, index: 0 });

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cabins = [
    {
      name: 'Эконом',
      image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80',
      price: '5 000',
      capacity: '2 гостя',
      rooms: '1 комната',
      features: ['Двуспальная кровать', 'Электричество', 'Обогреватель', 'Базовая мебель'],
      description: 'Уютный домик для пары или одного рыбака',
      photos: [
        'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=90',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90'
      ]
    },
    {
      name: 'Стандарт',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&q=80',
      price: '7 000',
      capacity: '3 гостя',
      rooms: '1 комната',
      features: ['2 кровати', 'Электричество', 'Отопление', 'Кухонный уголок', 'Холодильник'],
      description: 'Комфортное размещение для небольшой компании',
      photos: [
        'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=90',
        'https://images.unsplash.com/photo-1505692069463-5e3405e2a4b2?w=1200&q=90',
        'https://images.unsplash.com/photo-1484156818044-c040038b0710?w=1200&q=90'
      ]
    },
    {
      name: 'Комфорт',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
      price: '9 000',
      capacity: '4 гостя',
      rooms: '2 комнаты',
      features: ['Спальня + гостиная', 'Санузел', 'Душ', 'Кухня', 'Wi-Fi', 'ТВ'],
      description: 'Просторный домик с отдельными зонами',
      photos: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=90',
        'https://images.unsplash.com/photo-1484156818044-c040038b0710?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90'
      ]
    },
    {
      name: 'Люкс',
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&q=80',
      price: '11 000',
      capacity: '4 гостя',
      rooms: '2 комнаты',
      features: ['2 спальни', 'Санузел', 'Кухня', 'Гостиная', 'Терраса', 'Wi-Fi', 'ТВ', 'Камин'],
      description: 'Премиальное размещение с панорамным видом',
      photos: [
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=90',
        'https://images.unsplash.com/photo-1484156818044-c040038b0710?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90'
      ]
    },
    {
      name: 'Семейный',
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
      price: '13 000',
      capacity: '6 гостей',
      rooms: '3 комнаты',
      features: ['3 спальни', '2 санузла', 'Кухня-гостиная', 'Терраса', 'Мангальная зона', 'Wi-Fi'],
      description: 'Большой дом для семьи или компании друзей',
      photos: [
        'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90',
        'https://images.unsplash.com/photo-1484156818044-c040038b0710?w=1200&q=90'
      ]
    },
    {
      name: 'VIP Коттедж',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
      price: '15 000',
      capacity: '8 гостей',
      rooms: '4 комнаты',
      features: ['4 спальни', '2 санузла', 'Кухня премиум', 'Сауна', 'Джакузи', 'Терраса', 'Барбекю', 'Wi-Fi', 'Smart TV'],
      description: 'Роскошный коттедж для незабываемого отдыха',
      photos: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90',
        'https://images.unsplash.com/photo-1484156818044-c040038b0710?w=1200&q=90',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=90'
      ]
    }
  ];

  const openLightbox = (cabin) => setLightbox({ cabin, index: 0 });
  const closeLightbox = () => setLightbox({ cabin: null, index: 0 });
  const showPrev = () => {
    if (!lightbox.cabin) return;
    setLightbox((prev) => ({ ...prev, index: prev.index === 0 ? prev.cabin.photos.length - 1 : prev.index - 1 }));
  };
  const showNext = () => {
    if (!lightbox.cabin) return;
    setLightbox((prev) => ({ ...prev, index: prev.index === prev.cabin.photos.length - 1 ? 0 : prev.index + 1 }));
  };

  return (
    <section id="cabins" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Наши домики</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите идеальный вариант размещения для вашего отдыха — от уютных эконом-домиков до роскошных VIP-коттеджей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <button type="button" onClick={() => openLightbox(cabin)} className="relative h-64 overflow-hidden w-full text-left">
                <img src={cabin.image} alt={cabin.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#c9a962] text-white px-4 py-2 rounded-full font-bold">{cabin.price} ₽/сутки</div>
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{cabin.name}</h3>
              </button>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{cabin.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#1e3a5f]" />
                    <span>{cabin.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#1e3a5f]" />
                    <span>{cabin.rooms}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button onClick={scrollToBooking} className="w-full bg-[#1e3a5f] hover:bg-[#2c5282] text-white">
                  Забронировать
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox.cabin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-black">
              <img
                src={lightbox.cabin.photos[lightbox.index]}
                alt={`${lightbox.cabin.name} фото ${lightbox.index + 1}`}
                className="w-full max-h-[70vh] object-cover"
              />
              <button type="button" onClick={closeLightbox} className="absolute top-4 right-4 bg-white/80 text-[#1e3a5f] rounded-full px-3 py-2 font-semibold shadow">
                Закрыть
              </button>
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1e3a5f] p-3 rounded-full shadow"
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#1e3a5f] p-3 rounded-full shadow"
                aria-label="Следующее фото"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {lightbox.cabin.photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox((prev) => ({ ...prev, index: idx }))}
                    className={`w-2.5 h-2.5 rounded-full transition ${idx === lightbox.index ? 'bg-[#c9a962]' : 'bg-white/60'}`}
                    aria-label={`Перейти к фото ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-[#1e3a5f]">{lightbox.cabin.name}</p>
                <p className="text-gray-600">
                  Фото {lightbox.index + 1} из {lightbox.cabin.photos.length}
                </p>
              </div>
              <Button onClick={scrollToBooking} className="bg-[#c9a962] hover:bg-[#b8965a] text-white">
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const services = [
    { icon: Wifi, title: 'Аренда лодок', price: 'от 1 500 ₽/день', description: 'Моторные и весельные лодки в отличном состоянии', features: ['Моторные лодки 5-15 л.с.', 'Весельные лодки', 'Спасательные жилеты', 'Топливо в наличии'] },
    { icon: Coffee, title: 'Рыболовный гид', price: 'от 5 000 ₽/день', description: 'Опытные гиды покажут лучшие места для рыбалки', features: ['Знание водоёма', 'Помощь новичкам', 'Советы по снастям', 'Рассказы о местах'] },
    { icon: Wifi, title: 'Экскурсии', price: 'от 3 000 ₽/чел', description: 'Познавательные туры по карельским достопримечательностям', features: ['Водопад Киваккакоски', 'Петроглифы', 'Наблюдение за птицами', 'Фототур'] },
    { icon: Coffee, title: 'Баня на дровах', price: '2 000 ₽/2 часа', description: 'Традиционная карельская баня с панорамным видом на озеро', features: ['Настоящая дровяная печь', 'Веники в подарок', 'Купель', 'Чай на травах'] },
    { icon: Wifi, title: 'Питание', price: 'от 800 ₽/день', description: 'Домашняя кухня из местных продуктов', features: ['Завтрак, обед, ужин', 'Уха из свежей рыбы', 'Карельские калитки', 'Вегетарианское меню'] },
    { icon: Coffee, title: 'Трансфер', price: 'от 5 000 ₽', description: 'Комфортная доставка от вокзала или аэропорта', features: ['Встреча с табличкой', 'Помощь с багажом', 'Комфортные авто', 'Опытные водители'] }
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Дополнительные услуги</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Мы позаботимся о вашем комфорте и создадим незабываемые впечатления</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-[#c9a962]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{service.title}</h3>
              <p className="text-[#c9a962] font-bold text-lg mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90', title: 'Пяозеро на рассвете' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=90', title: 'Трофейная щука' },
    { url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&q=90', title: 'Уютные домики' },
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90', title: 'Карельская природа' },
    { url: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200&q=90', title: 'Рыбалка с лодки' },
    { url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=90', title: 'Вид из окна' },
    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90', title: 'Интерьер домика' },
    { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=90', title: 'Закат на озере' },
    { url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=1200&q=90', title: 'Костёр у воды' }
  ];

  const handlePrevious = () => {
    const currentIndex = images.findIndex((img) => img.url === selectedImage.url);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
  };
  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img.url === selectedImage.url);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Галерея</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Посмотрите, как выглядит наш отдых и природа вокруг</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.url} alt={selectedImage.title} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-white/80 text-[#1e3a5f] rounded-full p-2">
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#1e3a5f] rounded-full p-3"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-[#1e3a5f] rounded-full p-3">
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-center text-white mt-4">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Conditions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const items = [
    { title: 'Заселение', text: 'с 14:00 до 22:00', accent: 'С гибким подходом' },
    { title: 'Выселение', text: 'до 12:00', accent: 'Можно продлить' },
    { title: 'Предоплата', text: '30% от брони', accent: 'Онлайн или перевод' },
    { title: 'Отмена', text: 'Бесплатно за 14 дней', accent: 'Без штрафов' },
    { title: 'Домашние животные', text: 'По согласованию', accent: 'Дружелюбны к питомцам' },
    { title: 'Курение', text: 'Только на улице', accent: 'Берегём природу' }
  ];

  return (
    <section id="conditions" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Условия размещения</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Простые и прозрачные правила проживания</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#1e3a5f]">{item.title}</h3>
                <span className="text-xs bg-[#c9a962]/15 text-[#c9a962] px-3 py-1 rounded-full">{item.accent}</span>
              </div>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const routes = [
    {
      icon: Plane,
      title: 'Самолётом',
      from: 'Москва → Петрозаводск',
      time: '1.5 часа',
      steps: ['Рейсы Аэрофлот, S7 ежедневно', 'Из аэропорта трансфер 250 км (3.5 часа)', 'Организуем встречу и доставку']
    },
    {
      icon: Train,
      title: 'Поездом',
      from: 'Москва/СПб → Петрозаводск',
      time: '12-14 часов',
      steps: ['Фирменные поезда "Карелия", "Арктика"', 'С вокзала трансфер до базы', 'Комфортабельные автомобили']
    },
    {
      icon: Car,
      title: 'Автомобилем',
      from: 'По трассе М18 "Кола"',
      time: '250 км от Петрозаводска',
      steps: ['Трасса М18 → поворот на п. Софпорог', 'Далее 40 км по грунтовой дороге', 'Встречаем и сопровождаем на месте']
    }
  ];

  return (
    <section id="location" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Как добраться</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">База находится на берегу Пяозера в Карелии. Добраться можно несколькими способами</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl flex items-center justify-center mb-6">
                <route.icon className="w-8 h-8 text-[#c9a962]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{route.title}</h3>
              <p className="text-gray-600 mb-2">{route.from}</p>
              <p className="text-[#c9a962] font-semibold mb-6">⏱ {route.time}</p>
              <ul className="space-y-3">
                {route.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }} className="mb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative w-full h-[500px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=31.468611,65.853889&z=10&l=map&pt=31.468611,65.853889,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
                title="Пяозеро на карте"
              />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Нужна помощь с дорогой?</h3>
              <p className="text-lg text-white/90 mb-6">
                Организуем трансфер от любой точки прибытия. Встретим, поможем с багажом и довезём до базы с комфортом.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5 text-[#c9a962]" />
                  <span>Карелия, Пяозеро, берег залива</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#c9a962]" />
                  <span>GPS: 65.853889, 31.468611</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a href="tel:+79211234567" className="inline-block bg-[#c9a962] hover:bg-[#b8965a] text-white font-bold text-xl px-8 py-4 rounded-full transition-colors mb-3">
                +7 921 123-45-67
              </a>
              <p className="text-white/80">Звоните, мы всё организуем!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    { name: 'Алексей', text: 'Отличное место для рыбалки! Поймал трофейную щуку на 9 кг. Домики уютные, персонал дружелюбный.', rating: 5 },
    { name: 'Марина', text: 'Очень понравилась баня с видом на озеро. Природа шикарная, дети в восторге.', rating: 5 },
    { name: 'Игорь', text: 'Были семьёй, брали гидом Сергея — показал классные точки. Вернёмся ещё.', rating: 5 }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Отзывы гостей</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Свежие впечатления от гостей базы</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#1e3a5f]">{reviews[currentIndex].name}</h3>
              <div className="flex gap-1">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, idx) => (
                  <span key={idx} className="text-[#c9a962] text-lg">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{reviews[currentIndex].text}</p>
          </motion.div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prev}>Назад</Button>
            <Button className="bg-[#c9a962] hover:bg-[#b8965a]" onClick={next}>Вперёд</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { question: 'Какая рыба водится в Пяозере?', answer: 'В Пяозере водятся: щука (трофейные экземпляры до 15 кг), крупный окунь (до 2 кг), хариус (до 1.5 кг), озёрная форель (до 3 кг), налим, сиг, ряпушка.' },
    { question: 'Нужна ли лицензия на рыбалку?', answer: 'Любительская рыбалка с берега бесплатна. Для рыбалки с лодки требуется путёвка, которую поможем оформить на месте. Стоимость путёвки от 200₽/сутки.' },
    { question: 'Есть ли интернет?', answer: 'Да, на базе есть стабильный Wi‑Fi в домиках категорий Комфорт и выше.' }
  ];

  return (
    <section id="faq" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Вопросы и ответы</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Основная информация для гостей</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="border border-gray-200 rounded-2xl shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <span className="font-semibold text-[#1e3a5f]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({ phone: '', checkIn: '', checkOut: '', contact: 'whatsapp' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Заявка отправлена! Свяжемся с вами в течение 15 минут.');
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ phone: '', checkIn: '', checkOut: '', contact: 'whatsapp' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Забронировать</h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Заполните форму, и мы свяжемся с вами</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e3a5f] via-[#2a5580] to-[#1e3a5f] rounded-3xl p-8 md:p-10 shadow-2xl border border-[#c9a962]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[#c9a962]/20 backdrop-blur-sm border border-[#c9a962]/30 rounded-full px-4 py-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#c9a962]" />
                  <span className="text-white text-sm font-medium">Быстрая бронь</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Забронировать домик</h3>
                <p className="text-white/80 text-lg">Оставьте контакты — свяжемся в течение 15 минут</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-white/90 font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#c9a962]" />
                      Ваш телефон
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-[#c9a962] text-lg"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/90 font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#c9a962]" />
                        Заезд
                      </label>
                      <Input
                        required
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleChange('checkIn', e.target.value)}
                        className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white focus:bg-white/15 focus:border-[#c9a962]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/90 font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#c9a962]" />
                        Выезд
                      </label>
                      <Input
                        required
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleChange('checkOut', e.target.value)}
                        className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white focus:bg-white/15 focus:border-[#c9a962]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/90 font-medium">Как с вами связаться?</label>
                    <select
                      value={formData.contact}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      className="h-14 w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 text-base shadow-sm transition focus:bg-white/15 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30"
                    >
                      <option value="whatsapp">WhatsApp (быстрее всего)</option>
                      <option value="telegram">Telegram</option>
                      <option value="call">Телефонный звонок</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c9a962] hover:bg-[#d4b573] text-white h-16 text-lg font-semibold rounded-xl shadow-lg hover:shadow-[#c9a962]/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isSubmitting ? 'Отправляем...' : <span className="flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" />Отправить заявку</span>}
                  </Button>

                  <p className="text-white/60 text-sm text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 backdrop-blur-sm mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Заявка отправлена!</h4>
                  <p className="text-white/80 text-lg">Свяжемся с вами в течение 15 минут</p>
                </motion.div>
              )}

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c9a962] mb-1">15 мин</div>
                  <div className="text-white/70 text-sm">Время ответа</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#c9a962] mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-[#0f172a] text-white py-12">
    <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-xl font-bold mb-3">Пя Аузерия</h3>
        <p className="text-white/70">База отдыха на берегу Пяозера. Рыбалка, домики и настоящий отдых в Карелии.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Контакты</h4>
        <ul className="space-y-2 text-white/80">
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#c9a962]" />
            <a href="tel:+79211234567" className="hover:text-white">+7 921 123-45-67</a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#c9a962]" />
            <a href="mailto:info@pyaozeria.ru" className="hover:text-white">info@pyaozeria.ru</a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#c9a962] mt-1" />
            <span>Карелия, Пяозеро</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Социальные сети</h4>
        <div className="flex items-center gap-3 text-white/80">
          <a href="https://t.me" className="hover:text-white" target="_blank" rel="noreferrer">Telegram</a>
          <span className="text-white/40">•</span>
          <a href="https://vk.com" className="hover:text-white" target="_blank" rel="noreferrer">VK</a>
        </div>
        <p className="text-white/60 mt-4 text-sm">© {new Date().getFullYear()} Пя Аузерия</p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => window.open('https://wa.me/79211234567?text=Здравствуйте!%20Хочу%20узнать%20о%20бронировании', '_blank')}
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center group"
  >
    <MessageCircle className="w-8 h-8 text-white" />
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileHover={{ opacity: 1, x: 0 }}
      className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <p className="text-sm font-semibold text-gray-800">Написать в WhatsApp</p>
    </motion.div>
  </motion.button>
);

const Home = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <About />
    <Fishing />
    <Cabins />
    <Services />
    <Gallery />
    <Conditions />
    <Location />
    <Reviews />
    <FAQ />
    <Booking />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default function App() {
  return (
    <>
      <Home />
      <Toaster richColors position="top-right" />
    </>
  );
}
