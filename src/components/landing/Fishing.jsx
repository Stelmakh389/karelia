import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, TrendingUp } from 'lucide-react';

export default function Fishing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fishes = [
    {
      name: 'Щука',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      weight: 'до 15 кг',
      season: 'Май-Октябрь',
      description: 'Трофейная щука — главная добыча на Пяозере'
    },
    {
      name: 'Окунь',
      image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=600&q=80',
      weight: 'до 2 кг',
      season: 'Круглый год',
      description: 'Крупный окунь активен весь сезон'
    },
    {
      name: 'Хариус',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      weight: 'до 1.5 кг',
      season: 'Июнь-Сентябрь',
      description: 'Деликатесная рыба в чистейших водах'
    },
    {
      name: 'Форель',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80',
      weight: 'до 3 кг',
      season: 'Май-Сентябрь',
      description: 'Озёрная форель — редкий трофей'
    }
  ];

  const seasons = [
    {
      period: 'Май - Июнь',
      title: 'Весенний жор',
      description: 'Щука активно берёт на блесну, окунь на червя. Лучшее время для трофеев.',
      activity: 'Высокая'
    },
    {
      period: 'Июль - Август',
      title: 'Летний сезон',
      description: 'Хариус на мушку, форель на спиннинг. Комфортная погода для рыбалки.',
      activity: 'Средняя'
    },
    {
      period: 'Сентябрь - Октябрь',
      title: 'Осенний клёв',
      description: 'Щука и окунь готовятся к зиме. Крупная рыба выходит на охоту.',
      activity: 'Очень высокая'
    }
  ];

  return (
    <section id="fishing" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Рыбалка на Пяозере
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Пяозеро славится трофейной рыбалкой. Здесь водятся щука, окунь, хариус, форель и другие виды рыб.
          </p>
        </motion.div>

        {/* Fish Species */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {fishes.map((fish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {fish.name}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#c9a962]" />
                    <span className="text-sm font-semibold text-gray-700">Вес {fish.weight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#c9a962]" />
                    <span className="text-sm text-gray-600">{fish.season}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{fish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seasons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-[#1e3a5f] text-center mb-12">
            Сезоны рыбалки
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#c9a962] hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#c9a962] uppercase tracking-wide">
                    {season.period}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    season.activity === 'Очень высокая' ? 'bg-green-100 text-green-700' :
                    season.activity === 'Высокая' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {season.activity}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-[#1e3a5f] mb-4">{season.title}</h4>
                <p className="text-gray-600 leading-relaxed">{season.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}