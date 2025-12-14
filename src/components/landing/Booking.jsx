import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, MessageCircle, Mail, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function Booking({ inView }) {
  const [formData, setFormData] = useState({
    phone: '',
    checkIn: '',
    checkOut: '',
    contact: 'whatsapp',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Заявка отправлена! Свяжемся с вами в течение 15 минут.');
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          phone: '',
          checkIn: '',
          checkOut: '',
          contact: 'whatsapp',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#1e3a5f] via-[#2a5580] to-[#1e3a5f] rounded-3xl p-8 md:p-10 shadow-2xl border border-[#c9a962]/20 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#c9a962]/20 backdrop-blur-sm border border-[#c9a962]/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-white text-sm font-medium">Быстрая бронь</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Забронировать домик
          </h3>
          <p className="text-white/80 text-lg">
            Оставьте контакты — свяжемся в течение 15 минут
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-white/90 font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a962]" />
                Ваш телефон
              </label>
              <Input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-[#c9a962] text-lg"
              />
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-white/90 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#c9a962]" />
                  Заезд
                </label>
                <Input
                  required
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange('checkIn', e.target.value)}
                  className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white focus:bg-white/15 focus:border-[#c9a962]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/90 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#c9a962]" />
                  Выезд
                </label>
                <Input
                  required
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange('checkOut', e.target.value)}
                  className="h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white focus:bg-white/15 focus:border-[#c9a962]"
                />
              </div>
            </div>

            {/* Contact Method */}
            <div className="space-y-2">
              <label className="text-white/90 font-medium">
                Как с вами связаться?
              </label>
              <select
                value={formData.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
                className="h-14 w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 text-base shadow-sm transition focus:bg-white/15 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30"
              >
                <option value="whatsapp">WhatsApp (быстрее всего)</option>
                <option value="telegram">Telegram</option>
                <option value="call">Телефонный звонок</option>
              </select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#c9a962] hover:bg-[#d4b573] text-white h-16 text-lg font-semibold rounded-xl shadow-lg hover:shadow-[#c9a962]/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {isSubmitting ? (
                <span>Отправляем...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Отправить заявку
                </span>
              )}
            </Button>

            <p className="text-white/60 text-sm text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 backdrop-blur-sm mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">
              Заявка отправлена!
            </h4>
            <p className="text-white/80 text-lg">
              Свяжемся с вами в течение 15 минут
            </p>
          </motion.div>
        )}

        {/* Trust Elements */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#c9a962] mb-1">15 мин</div>
            <div className="text-white/70 text-sm">Время ответа</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#c9a962] mb-1">24/7</div>
            <div className="text-white/70 text-sm">Поддержка</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
