import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Trees, Fish, Home, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Trees,
      title: 'Дикая природа',
      description: 'Нетронутая карельская природа и чистейший воздух'
    },
    {
      icon: Fish,
      title: 'Трофейная рыбалка',
      description: 'Щука, окунь, хариус, форель в изобилии'
    },
    {
      icon: Home,
      title: 'Комфортные домики',
      description: 'Современные условия в окружении дикой природы'
    },
    {
      icon: Mountain,
      title: 'Уединение',
      description: 'Далеко от городской суеты и шума'
    }
  ];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90',
      title: 'Панорама Пяозера на закате'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=90',
      title: 'Тихие утренние воды и рыбалка'
    },
    {
      url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=90',
      title: 'Лесные тропы в шаге от домиков'
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            О базе отдыха
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Пя Аузерия — это уникальная база отдыха на берегу легендарного Пяозера в Карелии. 
            Мы создали идеальное место для тех, кто ищет настоящий отдых на природе, 
            трофейную рыбалку и незабываемые впечатления.
          </p>
        </motion.div>

        {/* Features Grid */}
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

        {/* Image and Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
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

            {/* Slider controls */}
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

            {/* Dots */}
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

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#1e3a5f]">
              Почему выбирают нас?
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Расположение:</strong> База находится на живописном берегу Пяозера — 
                  одного из самых чистых и рыбных озёр Карелии
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Инфраструктура:</strong> Комфортные домики с современными удобствами, 
                  баня, лодочная станция, беседки для отдыха
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Рыбалка:</strong> Профессиональные гиды, современные лодки, 
                  трофейные экземпляры щуки, окуня, хариуса и форели
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Сервис:</strong> Внимательный персонал, индивидуальный подход, 
                  организация трансфера и экскурсий
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Дублированный блок с обратным порядком (сначала текст, потом фото) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mt-16"
        >
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#1e3a5f]">
              Почему выбирают нас?
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Расположение:</strong> База находится на живописном берегу Пяозера — 
                  одного из самых чистых и рыбных озёр Карелии
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Инфраструктура:</strong> Комфортные домики с современными удобствами, 
                  баня, лодочная станция, беседки для отдыха
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Рыбалка:</strong> Профессиональные гиды, современные лодки, 
                  трофейные экземпляры щуки, окуня, хариуса и форели
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Сервис:</strong> Внимательный персонал, индивидуальный подход, 
                  организация трансфера и экскурсий
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl group order-1 md:order-2">
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
        </motion.div>
      </div>
    </section>
  );
}
