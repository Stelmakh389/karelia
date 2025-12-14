import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, CreditCard, AlertCircle, Info } from 'lucide-react';

export default function Conditions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const conditions = [
    {
      icon: Clock,
      title: 'Время заезда и выезда',
      items: [
        'Заезд: с 14:00',
        'Выезд: до 12:00',
        'Ранний заезд/поздний выезд: по договоренности',
        'Минимальный срок бронирования: 2 суток'
      ]
    },
    {
      icon: CreditCard,
      title: 'Оплата',
      items: [
        'Предоплата 30% при бронировании',
        'Остальная сумма — при заезде',
        'Принимаем наличные и карты',
        'Возможна оплата переводом'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Отмена бронирования',
      items: [
        'За 14+ дней: возврат 100%',
        'За 7-13 дней: возврат 50%',
        'За 0-6 дней: возврат 0%',
        'При форс-мажоре: индивидуально'
      ]
    },
    {
      icon: Info,
      title: 'Правила проживания',
      items: [
        'Запрещено курение в помещениях',
        'Домашние животные: по согласованию',
        'Соблюдение тишины: с 23:00 до 08:00',
        'Бережное отношение к природе'
      ]
    }
  ];

  const included = [
    'Электричество и отопление',
    'Постельное белье и полотенца',
    'Посуда и кухонные принадлежности',
    'Мангал и дрова для костра',
    'Уборка территории',
    'Wi-Fi (в некоторых домиках)',
    'Парковка'
  ];

  const notIncluded = [
    'Питание (можно заказать)',
    'Аренда лодок',
    'Услуги гида',
    'Экскурсии',
    'Баня',
    'Трансфер'
  ];

  return (
    <section id="conditions" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Условия проживания
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-xl flex items-center justify-center">
                  <condition.icon className="w-7 h-7 text-[#c9a962]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f]">{condition.title}</h3>
              </div>
              <ul className="space-y-3">
                {condition.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Included */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              Включено в стоимость
            </h3>
            <ul className="space-y-3">
              {included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
              Дополнительно
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">+</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}