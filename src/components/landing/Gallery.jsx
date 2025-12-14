import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.url === selectedImage.url);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Фотогалерея
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Посмотрите, как прекрасна Пя Аузерия в любое время года
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#c9a962] transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                className="absolute left-4 text-white hover:text-[#c9a962] transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 text-white hover:text-[#c9a962] transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-xl">{selectedImage.title}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}