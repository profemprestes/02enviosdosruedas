'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Bike, ShieldCheck, Zap, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Envíos Express',
      description: 'Prioridad absoluta y certeza total. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.',
      href: '/servicios/envios-express',
      icon: Zap,
      badge: 'URGENTE',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Envíos LowCost',
      description: 'Rentabilidad y ruteo masivo. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.',
      href: '/servicios/envios-lowcost',
      icon: Bike,
      badge: 'ECONÓMICO',
      color: 'from-brand-blue to-blue-800',
    },
    {
      title: 'Envíos Flex (MercadoLibre)',
      description: 'Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day.',
      href: '/servicios/enviosflex',
      icon: ShieldCheck,
      badge: 'INTEGRACIÓN FLEX',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'E-Commerce & 3PL',
      description: 'Tercerización y cuentas corrientes. Soluciones escalables para PyMEs con facturación mensual centralizada.',
      href: '/servicios/plan-emprendedores',
      icon: BarChart3,
      badge: 'PYMES & CORPORATIVO',
      color: 'from-slate-700 to-slate-800',
    },
  ];

  return (
    <section id="services-overview" className="py-24 bg-brand-blue border-b-[5px] border-brand-black relative overflow-hidden text-white">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-brand-yellow text-brand-black font-subheading uppercase tracking-widest text-xs neo-border shadow-[2px_2px_0px_0px_#0A0B0D] rotate-[-1deg]">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight">
            Soluciones Logísticas
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                className={`bg-white text-brand-black rounded-md p-8 neo-border shadow-[5px_5px_0px_0px_#0A0B0D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#0A0B0D] transition-all duration-150 flex flex-col justify-between group ${
                  isEven ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 rounded neo-border bg-brand-blue text-brand-yellow shadow-[2px_2px_0px_0px_#0A0B0D] group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="px-2.5 py-1.5 rounded neo-border bg-gray-100 text-brand-blue text-[10px] font-sans font-extrabold tracking-widest uppercase shadow-[1px_1px_0px_0px_#0A0B0D]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl font-display uppercase tracking-tight text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm leading-relaxed font-sans font-semibold mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t-2 border-brand-black/10 flex items-center justify-between">
                  <span className="text-xs font-sans font-extrabold uppercase tracking-wide text-brand-blue group-hover:text-brand-black transition-colors">
                    Ver especificaciones
                  </span>
                  <Link 
                    href={service.href}
                    className="h-11 w-11 rounded neo-btn-primary flex items-center justify-center"
                  >
                    <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
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
