import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Waves, User, Camera, Flame, Utensils, Car } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Waves,
      title: 'Аренда лодок',
      price: 'от 1 500 ₽/день',
      description: 'Моторные и весельные лодки в отличном состоянии',
      features: ['Моторные лодки 5-15 л.с.', 'Весельные лодки', 'Спасательные жилеты', 'Топливо в наличии']
    },
    {
      icon: User,
      title: 'Рыболовный гид',
      price: 'от 5 000 ₽/день',
      description: 'Опытные гиды покажут лучшие места для рыбалки',
      features: ['Знание водоёма', 'Помощь новичкам', 'Советы по снастям', 'Рассказы о местах']
    },
    {
      icon: Camera,
      title: 'Экскурсии',
      price: 'от 3 000 ₽/чел',
      description: 'Познавательные туры по карельским достопримечательностям',
      features: ['Водопад Киваккакоски', 'Петроглифы', 'Наблюдение за птицами', 'Фототур']
    },
    {
      icon: Flame,
      title: 'Баня на дровах',
      price: '2 000 ₽/2 часа',
      description: 'Традиционная карельская баня с панорамным видом на озеро',
      features: ['Настоящая дровяная печь', 'Веники в подарок', 'Купель', 'Чай на травах']
    },
    {
      icon: Utensils,
      title: 'Питание',
      price: 'от 800 ₽/день',
      description: 'Домашняя кухня из местных продуктов',
      features: ['Завтрак, обед, ужин', 'Уха из свежей рыбы', 'Карельские калитки', 'Вегетарианское меню']
    },
    {
      icon: Car,
      title: 'Трансфер',
      price: 'от 5 000 ₽',
      description: 'Комфортная доставка от вокзала или аэропорта',
      features: ['Встреча с табличкой', 'Помощь с багажом', 'Комфортные авто', 'Опытные водители']
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
            Дополнительные услуги
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы позаботимся о вашем комфорте и создадим незабываемые впечатления
          </p>
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Есть особые пожелания?</h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Мы готовы организовать для вас индивидуальную программу отдыха. 
            Свяжитесь с нами, и мы обсудим все детали!
          </p>
          <a
            href="tel:+79211234567"
            className="inline-block bg-[#c9a962] hover:bg-[#b8965a] text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Позвонить нам
          </a>
        </motion.div>
      </div>
    </section>
  );
}