import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Booking from './Booking';

export default function FAQ() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
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

  const faqs = [
    {
      question: 'Нужна ли лицензия на рыбалку?',
      answer:
        'Да, для рыбалки на Пяозере необходима лицензия. Мы поможем оформить её на месте или заранее через наших партнёров. Стоимость лицензии не входит в стоимость проживания.',
    },
    {
      question: 'Какие снасти брать с собой?',
      answer:
        'Мы рекомендуем спиннинги класса medium-heavy для щуки и судака, лёгкие снасти для окуня и хариуса. Также можем предоставить снасти в аренду. Подробные рекомендации вышлем после бронирования.',
    },
    {
      question: 'Можно ли приезжать зимой?',
      answer:
        'Да, база работает круглый год. Зимой у нас отличная подледная рыбалка на окуня и налима. Все домики отапливаемые, дороги регулярно чистятся. Баня зимой особенно приятна!',
    },
    {
      question: 'Есть ли интернет на базе?',
      answer:
        'Wi-Fi доступен в премиум-домиках и на ресепшене. В стандартных домиках есть мобильная связь всех операторов. Мы рекомендуем отдохнуть от гаджетов и насладиться природой!',
    },
    {
      question: 'Можно ли приехать с детьми?',
      answer:
        'Конечно! У нас семейная атмосфера, есть детская площадка, безопасные места для купания. Детям до 5 лет проживание бесплатно. Можем предоставить детские кроватки и стульчики.',
    },
    {
      question: 'Разрешены ли домашние животные?',
      answer:
        'Да, мы принимаем домашних животных по предварительному согласованию. Дополнительная плата — 500₽/сутки. Питомец должен быть привит и не доставлять беспокойства другим гостям.',
    },
    {
      question: 'Как происходит оплата?',
      answer:
        'Бронирование подтверждается предоплатой 30%. Остальную сумму можно оплатить при заезде наличными или картой. Принимаем оплату по безналичному расчёту.',
    },
    {
      question: 'Можно ли отменить бронирование?',
      answer:
        'Да. При отмене за 14+ дней возвращается 100% предоплаты. За 7-14 дней — 50%. За 3-7 дней — 25%. Менее чем за 3 дня — не возвращается. Рекомендуем оформить туристическую страховку.',
    },
    {
      question: 'Есть ли магазины поблизости?',
      answer:
        'Ближайший магазин находится в 15 км. Рекомендуем закупить основные продукты заранее. На базе можно заказать готовое питание или привезти продукты с собой. Есть коптильня и гриль.',
    },
    {
      question: 'Предоставляете ли вы трансфер?',
      answer:
        'Да, организуем трансфер из Петрозаводска (от 8000₽) и Костомукши (от 4000₽). Можем встретить на ж/д вокзале или в аэропорту. Бронировать трансфер нужно заранее.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Бронирование и вопросы
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Забронируйте домик или найдите ответы на популярные вопросы
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Booking Form */}
          <div className="lg:sticky lg:top-24">
            <Booking inView={inView} />
          </div>

          {/* FAQ */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a5580] flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-[#c9a962]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f]">Частые вопросы</h3>
                  <p className="text-gray-600">Всё, что нужно знать перед поездкой</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-[#1e3a5f] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c9a962] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}