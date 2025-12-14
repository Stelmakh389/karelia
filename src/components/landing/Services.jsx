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
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] rounded-3xl" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a962] rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Есть особые пожелания?
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Мы готовы организовать для вас индивидуальную программу отдыха. 
                Свяжитесь с нами удобным способом!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phone */}
              <a
                href="tel:+79211234567"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-[#c9a962] group"
              >
                <div className="w-14 h-14 bg-[#c9a962] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 text-center">Позвонить</h4>
                <p className="text-white/80 text-center text-sm mb-2">+7 921 123-45-67</p>
                <p className="text-white/60 text-center text-xs">9:00 - 21:00 ежедневно</p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/79211234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-[#25D366] group"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 text-center">WhatsApp</h4>
                <p className="text-white/80 text-center text-sm mb-2">Написать сообщение</p>
                <p className="text-white/60 text-center text-xs">Быстрый ответ</p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@pyauzeria.ru"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-[#c9a962] group"
              >
                <div className="w-14 h-14 bg-[#c9a962] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2 text-center">Email</h4>
                <p className="text-white/80 text-center text-sm mb-2">info@pyauzeria.ru</p>
                <p className="text-white/60 text-center text-xs">Ответим в течение часа</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}