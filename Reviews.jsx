import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Алексей М.',
      date: 'Октябрь 2024',
      rating: 5,
      text: 'Потрясающее место! Рыбалка превзошла все ожидания - поймал щуку на 8 кг. Домик комфортный, баня отличная. Природа невероятная, тишина и покой. Обязательно вернёмся!',
      city: 'Москва'
    },
    {
      name: 'Елена и Сергей К.',
      date: 'Сентябрь 2024',
      rating: 5,
      text: 'Отдыхали семьёй в семейном домике. Дети в восторге! Чистейший воздух, красивейшие виды. Гид помог найти отличные места для рыбалки. Кухня вкусная, персонал приветливый. Спасибо за прекрасный отдых!',
      city: 'Санкт-Петербург'
    },
    {
      name: 'Дмитрий В.',
      date: 'Август 2024',
      rating: 5,
      text: 'Ездим на Пя Аузерию уже третий год подряд. Это наше любимое место для рыбалки. Всегда хороший улов, комфортные условия, адекватные цены. Лодки в отличном состоянии, егеря знают своё дело.',
      city: 'Петрозаводск'
    },
    {
      name: 'Ирина Л.',
      date: 'Июль 2024',
      rating: 5,
      text: 'Не рыбак, но муж уговорил поехать. Не пожалела ни на секунду! Пока он рыбачил, я наслаждалась природой, ходила в баню, читала книги на террасе. Место волшебное, буду рекомендовать подругам!',
      city: 'Москва'
    },
    {
      name: 'Михаил С.',
      date: 'Июнь 2024',
      rating: 5,
      text: 'Организовали корпоратив на базе - всё прошло на высшем уровне! Сняли несколько домиков, рыбачили, парились в бане, жарили шашлыки. Команда базы помогла со всем, молодцы! Очень довольны.',
      city: 'Вологда'
    },
    {
      name: 'Андрей П.',
      date: 'Май 2024',
      rating: 5,
      text: 'Весенний жор щуки - это нечто! За три дня поймали столько, сколько за весь прошлый сезон. VIP коттедж оправдал ожидания - джакузи после рыбалки - просто супер! Цена соответствует качеству.',
      city: 'Москва'
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Отзывы гостей
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Более 500 довольных гостей за последний год. Читайте, что они говорят о нас
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-[#c9a962] opacity-20" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#c9a962] text-[#c9a962]" />
                ))}
              </div>

              {/* Review Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic"
              >
                "{reviews[currentIndex].text}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-xl font-bold text-[#1e3a5f] mb-1">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {reviews[currentIndex].city} • {reviews[currentIndex].date}
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16">
              <Button
                onClick={prevReview}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 border-gray-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextReview}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 border-gray-200"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#c9a962] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Довольных гостей' },
            { number: '4.9', label: 'Средняя оценка' },
            { number: '95%', label: 'Возвращаются снова' },
            { number: '10+', label: 'Лет опыта' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#1e3a5f] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}