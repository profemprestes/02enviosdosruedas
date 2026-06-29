'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Shield, Zap, MapPin, ArrowRight, Bike } from 'lucide-react';

export default function HeroAnimado() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section 
      id="hero-animado" 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-blue border-b-[5px] border-brand-black text-white"
    >
      {/* Neo-brutalist Grid Background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Decorative sticker details */}
      <div className="absolute top-32 right-12 w-24 h-24 bg-brand-yellow text-brand-black neo-border rounded-full flex items-center justify-center font-subtitle text-sm uppercase tracking-widest rotate-12 shadow-[2px_2px_0px_0px_#0A0B0D] hidden md:flex select-none">
        Materia 100%
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="px-4 py-2 rounded-md text-sm font-subheading uppercase tracking-widest bg-brand-yellow text-brand-black neo-border shadow-[3px_3px_0px_0px_#0A0B0D] flex items-center gap-2 rotate-[-1deg]">
                <Bike className="h-4 w-4 animate-bounce text-brand-blue" />
                Tu Solución Confiable
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.95]"
            >
              Mensajería y Logística <br />
              <span className="bg-brand-yellow text-brand-black px-3 py-1 inline-block my-2 neo-border shadow-[6px_6px_0px_0px_#0A0B0D] rotate-[1.5deg]">
                E-Commerce
              </span> <br />
              en Mar del Plata
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-100 text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-3"
            >
              <Link
                href="/cotizar/express"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto neo-btn-primary text-xl px-8 py-4 rounded-md flex items-center justify-center gap-2 font-medium"
              >
                Solicitar Servicio
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/servicios/envios-express"
                id="hero-cta-servicios"
                className="w-full sm:w-auto neo-btn-secondary text-xl px-8 py-4 rounded-md flex items-center justify-center gap-2"
              >
                Ver Servicios
              </Link>
            </motion.div>

            {/* Features list */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-brand-black/20 max-w-lg mx-auto lg:mx-0"
            >
              <div className="bg-white text-brand-black p-3.5 rounded-md neo-border shadow-[3px_3px_0px_0px_#0A0B0D] flex flex-col items-center lg:items-start rotate-[-1deg]">
                <div className="p-1.5 bg-brand-blue text-brand-yellow rounded mb-2">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-sans font-extrabold tracking-wider uppercase text-brand-blue">100% SEGURO</span>
              </div>
              
              <div className="bg-white text-brand-black p-3.5 rounded-md neo-border shadow-[3px_3px_0px_0px_#0A0B0D] flex flex-col items-center lg:items-start rotate-[1deg]">
                <div className="p-1.5 bg-brand-blue text-brand-yellow rounded mb-2">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-sans font-extrabold tracking-wider uppercase text-brand-blue">ULTRA RÁPIDO</span>
              </div>

              <div className="bg-white text-brand-black p-3.5 rounded-md neo-border shadow-[3px_3px_0px_0px_#0A0B0D] flex flex-col items-center lg:items-start rotate-[-1.5deg]">
                <div className="p-1.5 bg-brand-blue text-brand-yellow rounded mb-2">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-sans font-extrabold tracking-wider uppercase text-brand-blue">COBERTURA</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right graphic/illustration representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="relative w-full max-w-sm bg-white text-brand-black rounded-lg neo-border shadow-[8px_8px_0px_0px_rgba(10,11,13,1)] flex items-center justify-center p-8 overflow-hidden"
            >
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
              <div className="w-48 h-48 rounded-full bg-brand-yellow/30 absolute -top-10 -right-10 blur-2xl" />
              <div className="w-48 h-48 rounded-full bg-brand-blue/10 absolute -bottom-10 -left-10 blur-2xl" />

              <div className="text-center z-10 space-y-4 w-full">
                <div className="w-20 h-20 bg-brand-yellow text-brand-black rounded-full neo-border shadow-[3px_3px_0px_0px_#0A0B0D] flex items-center justify-center mx-auto mb-2 rotate-[-5deg]">
                  <Bike className="h-10 w-10" />
                </div>
                <p className="font-display text-3xl tracking-wide uppercase text-brand-blue leading-tight">DOSRUEDAS COURIER</p>
                <div className="h-[2.5px] bg-brand-black w-16 mx-auto" />
                <p className="text-xs text-gray-700 font-sans tracking-wide leading-relaxed font-semibold">
                  Conectando e-commerce, locales comerciales y envíos particulares de punta a punta en toda la ciudad.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-black text-[10px] font-subheading uppercase tracking-wider text-brand-yellow rotate-[1deg]">
                  <span>Entrega Garantizada</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
