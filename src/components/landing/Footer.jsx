import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c9a962] to-[#b8965a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ПА</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Пя Аузерия</h3>
                <p className="text-sm text-white/70">База отдыха</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Уникальная база отдыха на берегу Пяозера в Карелии. 
              Трофейная рыбалка, комфортные домики, незабываемый отдых на природе.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c9a962] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c9a962] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c9a962] rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a962]">Навигация</h4>
            <ul className="space-y-3">
              {[
                { label: 'О базе', id: 'about' },
                { label: 'Домики', id: 'cabins' },
                { label: 'Рыбалка', id: 'fishing' },
                { label: 'Услуги', id: 'services' },
                { label: 'Галерея', id: 'gallery' },
                { label: 'Отзывы', id: 'reviews' },
                { label: 'FAQ', id: 'faq' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-[#c9a962] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a962]">Услуги</h4>
            <ul className="space-y-3 text-white/80">
              <li>Аренда домиков</li>
              <li>Аренда лодок</li>
              <li>Рыболовные гиды</li>
              <li>Баня на дровах</li>
              <li>Экскурсии</li>
              <li>Питание</li>
              <li>Трансфер</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a962]">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+79211234567" className="text-white/90 hover:text-[#c9a962] transition-colors font-medium block">
                    +7 921 123-45-67
                  </a>
                  <p className="text-sm text-white/60">Ежедневно 9:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@pyauzeria.ru" className="text-white/90 hover:text-[#c9a962] transition-colors">
                    info@pyauzeria.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/90">Республика Карелия</p>
                  <p className="text-white/90">Пяозеро, берег залива</p>
                  <p className="text-sm text-white/60 mt-1">65.853889, 31.468611</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Пя Аузерия. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#c9a962] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-[#c9a962] transition-colors">
                Публичная оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}