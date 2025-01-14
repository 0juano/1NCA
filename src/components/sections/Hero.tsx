import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { scrollToSection } from '../../utils/scroll';
import type { Translations } from '../../types/translations';

interface HeroProps {
  t: Translations;
  y: any;
}

export function Hero({ t, y }: HeroProps) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col lg:flex-row items-center pt-16 lg:pt-0">
      <div className="relative z-10 w-full lg:w-1/2 h-full flex items-center px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-3xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6 text-[#DBC078] text-xs sm:text-sm md:text-base tracking-widest"
          >
            {t.hero.subtitle}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight sm:leading-tight md:leading-tight"
          >
            <span className="text-[#DBC078]">{t.hero.title.line1.split(' ')[0]}</span>{' '}
            {t.hero.title.line1.split(' ').slice(1).join(' ')}<br />
            {t.hero.title.line2}<br />
            {t.hero.title.line3}<br />
            {t.hero.title.line4}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 max-w-lg"
          >
            {t.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={(e) => scrollToSection(e, 'about')}
              className="w-full sm:w-auto min-w-[160px] h-[48px] sm:h-[56px] bg-[#DBC078] text-[#222831] hover:bg-[#DBC078]/90 text-sm sm:text-base flex items-center justify-center"
            >
              <span className="whitespace-nowrap">
                {t.hero.cta}
              </span>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute lg:relative lg:w-1/2 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-grid-pattern" />
        </motion.div>
        <motion.div
          style={{ y }}
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#222831] to-transparent"
        />
      </div>
    </div>
  );
}