import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Bed, Wifi, Coffee, CheckCircle } from 'lucide-react';

export default function Cabins() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState({ cabin: null, index: 0 });

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  const openLightbox = (cabin) => {
    setLightbox({ cabin, index: 0 });
  };

  const closeLightbox = () => setLightbox({ cabin: null, index: 0 });

  const showPrev = () => {
    if (!lightbox.cabin) return;
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.cabin.photos.length - 1 : prev.index - 1
    }));
  };

  const showNext = () => {
    if (!lightbox.cabin) return;
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === prev.cabin.photos.length - 1 ? 0 : prev.index + 1
    }));
  };

  return (
    <section id="cabins" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Наши домики
          </h2>
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
              {/* Image */}
              <button
                type="button"
                onClick={() => openLightbox(cabin)}
                className="relative h-64 overflow-hidden w-full text-left"
              >
                <img
                  src={cabin.image}
                  alt={cabin.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#c9a962] text-white px-4 py-2 rounded-full font-bold">
                  {cabin.price} ₽/сутки
                </div>
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                  {cabin.name}
                </h3>
              </button>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{cabin.description}</p>

                {/* Info */}
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

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {cabin.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c9a962] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-[#1e3a5f] hover:bg-[#2c5282] text-white"
                >
                  Забронировать
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Лайтбокс */}
      {lightbox.cabin && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black">
              <img
                src={lightbox.cabin.photos[lightbox.index]}
                alt={`${lightbox.cabin.name} фото ${lightbox.index + 1}`}
                className="w-full max-h-[70vh] object-cover"
              />
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/80 text-[#1e3a5f] rounded-full px-3 py-2 font-semibold shadow"
              >
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
                <p className="text-gray-600">Фото {lightbox.index + 1} из {lightbox.cabin.photos.length}</p>
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
}
