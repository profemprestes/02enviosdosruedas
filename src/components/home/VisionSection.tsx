'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Users, Trophy, Truck } from 'lucide-react';

export default function VisionSection() {
  const stats = [
    { value: '+5.000', label: 'Confianza local comprobada', icon: Users },
    { value: '7 Años', label: 'Innovación constante en última milla', icon: Trophy },
    { value: 'Flota Exclusiva', label: 'Motocicletas dedicadas para máxima agilidad urbana', icon: Truck },
  ];

  return (
    <section id="vision-section" className="py-24 bg-white relative overflow-hidden border-b-[5px] border-brand-black">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="px-3.5 py-2 bg-brand-blue text-brand-yellow font-subheading uppercase tracking-widest text-xs neo-border shadow-[2px_2px_0px_0px_#0A0B0D] rotate-[-1.5deg] inline-block">
                Partner Logístico Especializado
              </span>
            </div>
            
            <h2 className="text-brand-black text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[0.95]">
              Nuestra Visión Logística
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed font-sans max-w-xl font-medium">
              Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </p>

            <div className="space-y-5 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start p-4 rounded-md bg-white neo-border shadow-[3px_3px_0px_0px_#0A0B0D] rotate-[-0.5deg]">
                <div className="p-3 bg-brand-yellow text-brand-black neo-border rounded shrink-0 shadow-[1px_1px_0px_0px_#0A0B0D]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1">
                    Entregas a Tiempo
                  </h4>
                  <p className="text-xs text-gray-600 font-sans font-semibold">
                    Puntualidad garantizada en cada envío.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start p-4 rounded-md bg-white neo-border shadow-[3px_3px_0px_0px_#0A0B0D] rotate-[0.5deg]">
                <div className="p-3 bg-brand-yellow text-brand-black neo-border rounded shrink-0 shadow-[1px_1px_0px_0px_#0A0B0D]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-subheading uppercase tracking-wider text-brand-blue leading-none mb-1">
                    Envíos Seguros
                  </h4>
                  <p className="text-xs text-gray-600 font-sans font-semibold">
                    Protección total de tus paquetes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Deck Block */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              const initialRotation = i % 2 === 0 ? -6 : 6;
              const targetRotation = i === 2 ? 0.5 : (i % 2 === 0 ? -1 : 1);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, rotate: initialRotation, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, rotate: targetRotation, scale: 1 }}
                  whileHover={{ 
                    scale: 1.03, 
                    rotate: 0, 
                    y: -4,
                    transition: { type: 'spring', stiffness: 300, damping: 12 } 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, type: 'spring', stiffness: 120, damping: 12 }}
                  className={`p-6 rounded-md neo-card flex flex-col justify-between cursor-pointer ${
                    i === 2 ? 'sm:col-span-2 bg-brand-yellow text-brand-black' : 'bg-white text-brand-black'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded neo-border bg-brand-blue text-brand-yellow shadow-[1px_1px_0px_0px_#0A0B0D]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-display text-brand-blue uppercase leading-none mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] font-sans font-extrabold uppercase tracking-wider text-gray-700 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
