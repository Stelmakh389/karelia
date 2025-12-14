import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function Reviews() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const videos = [
    {
      id: 1,
      preview: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      author: 'Александр',
      title: 'Трофейная щука 12кг!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // Placeholder
    },
    {
      id: 2,
      preview: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=600&q=80',
      author: 'Семья Ивановых',
      title: 'Наш отдых в домике',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      preview: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600&q=80',
      author: 'Михаил и друзья',
      title: 'Уха на костре',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 4,
      preview: 'https://images.unsplash.com/photo-1520366498724-709889c0c685?w=600&q=80',
      author: 'Елена',
      title: 'Утро на Пяозере',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Живые эмоции
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Видео-истории наших гостей
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[9/16] group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <img
                src={video.preview}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#c9a962] flex items-center justify-center text-xs font-bold">
                    {video.author[0]}
                  </div>
                  <span className="text-sm font-medium opacity-90">{video.author}</span>
                </div>
                <p className="text-sm font-medium leading-tight">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 text-white hover:text-[#c9a962] transition-colors z-50"
              >
                <X className="w-8 h-8" />
              </button>

              <div 
                className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={selectedVideo.videoUrl}
                  poster={selectedVideo.preview}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}