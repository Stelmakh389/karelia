import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Car, Plane, Train, Navigation } from 'lucide-react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const routes = [
    {
      icon: Plane,
      title: 'Самолётом',
      from: 'Москва → Петрозаводск',
      time: '1.5 часа',
      steps: [
        'Рейсы Аэрофлот, S7 ежедневно',
        'Из аэропорта трансфер 250 км (3.5 часа)',
        'Организуем встречу и доставку'
      ]
    },
    {
      icon: Train,
      title: 'Поездом',
      from: 'Москва/СПб → Петрозаводск',
      time: '12-14 часов',
      steps: [
        'Фирменные поезда "Карелия", "Арктика"',
        'С вокзала трансфер до базы',
        'Комфортабельные автомобили'
      ]
    },
    {
      icon: Car,
      title: 'Автомобилем',
      from: 'По трассе М18 "Кола"',
      time: '250 км от Петрозаводска',
      steps: [
        'Трасса М18 → поворот на п. Софпорог',
        'Далее 40 км по грунтовой дороге',
        'Встречаем и сопровождаем на месте'
      ]
    }
  ];

  return (
    <section id="location" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Как добраться
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            База находится на берегу Пяозера в Карелии. Добраться можно несколькими способами
          </p>
        </motion.div>

        {/* Routes */}
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

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
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

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Нужна помощь с дорогой?</h3>
              <p className="text-lg text-white/90 mb-6">
                Организуем трансфер от любой точки прибытия. 
                Встретим, поможем с багажом и довезём до базы с комфортом.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a962]" />
                  <span>Карелия, Пяозеро, берег залива</span>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#c9a962]" />
                  <span>GPS: 65.853889, 31.468611</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a
                href="tel:+79211234567"
                className="inline-block bg-[#c9a962] hover:bg-[#b8965a] text-white font-bold text-xl px-8 py-4 rounded-full transition-colors mb-3"
              >
                +7 921 123-45-67
              </a>
              <p className="text-white/80">Звоните, мы всё организуем!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}