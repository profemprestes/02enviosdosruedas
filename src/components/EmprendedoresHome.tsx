'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function EmprendedoresHome() {
  const solutions = [
    {
      title: 'Soluciones Corporativas',
      description: 'Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala.',
      features: ['Facturación unificada', 'Múltiples despachos simultáneos', 'Gestión de devoluciones'],
      icon: Building2,
      tag: 'EMPRESAS',
    },
    {
      title: 'Envíos Flex MercadoLibre',
      description: 'Socio estratégico para potenciar tus ventas con entregas en el día.',
      features: ['Cumplimiento de SLAs de entrega', 'Etiquetado compatible', 'Ruteo dinámico'],
      icon: ShoppingBag,
      tag: 'MERCADOLIBRE',
    },
    {
      title: 'Logística E-Commerce',
      description: 'Gestión integral de última milla para PyMEs en crecimiento.',
      features: ['Seguimiento en tiempo real', 'Atención personalizada', 'Planes a tu medida'],
      icon: Landmark,
      tag: 'EMPRENDEDORES',
    },
  ];

  return (
    <section id="emprendedores-home" className="py-24 gradient-blue relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="px-3 py-1 bg-white/10 text-brand-yellow rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-white/10">
            Socio Estratégico Local
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            Potencia tu Logística con DosRuedas
          </h2>
          <div className="h-1 w-20 bg-brand-yellow rounded-full" />
        </div>

        {/* Solutions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-3.5 bg-brand-yellow text-brand-blue rounded-2xl shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest bg-brand-yellow text-brand-blue px-2.5 py-1 rounded-full uppercase">
                      {solution.tag}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed font-sans">
                      {solution.description}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-2.5 pt-2">
                    {solution.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-blue-200 font-sans">
                        <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <Link
                    href="/servicios/plan-emprendedores"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-yellow hover:text-white transition-colors"
                  >
                    <span>Conocer más</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
