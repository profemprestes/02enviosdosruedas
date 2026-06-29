'use client';

import React from 'react';

export default function DoubleTicker() {
  const textLeft = "ENVÍOS EN EL DÍA • MAR DEL PLATA • MOTO COURIER • ÚLTIMA MILLA • 100% ASEGURADO • ";
  const textRight = "MERCADOLIBRE FLEX • ENVIOS EXPRESS • CUENTAS PYMES • FRIULI 1972 • DOSRUEDAS COURIER • ";

  // Repeat the text several times to cover the screen width for seamless wrapping
  const repeatedTextLeft = Array(8).fill(textLeft).join("");
  const repeatedTextRight = Array(8).fill(textRight).join("");

  return (
    <div className="relative z-20 -my-6 overflow-hidden py-4 select-none pointer-events-none">
      {/* Ticker 1: Slides Left */}
      <div className="w-[120%] -left-[10%] relative bg-brand-yellow text-brand-black neo-border py-3 rotate-[-1.5deg] shadow-[4px_4px_0px_0px_#0A0B0D] overflow-hidden flex whitespace-nowrap">
        <div className="animate-[ticker_35s_linear_infinite] flex shrink-0 min-w-full justify-around uppercase font-subheading text-2xl sm:text-3xl tracking-widest">
          <span>{repeatedTextLeft}</span>
        </div>
        <div className="animate-[ticker_35s_linear_infinite] flex shrink-0 min-w-full justify-around uppercase font-subheading text-2xl sm:text-3xl tracking-widest" aria-hidden="true">
          <span>{repeatedTextLeft}</span>
        </div>
      </div>

      {/* Ticker 2: Slides Right */}
      <div className="w-[120%] -left-[10%] relative bg-brand-blue text-brand-yellow neo-border py-3 rotate-[1.5deg] shadow-[4px_4px_0px_0px_#0A0B0D] overflow-hidden flex whitespace-nowrap -mt-2">
        <div className="animate-[ticker-reverse_35s_linear_infinite] flex shrink-0 min-w-full justify-around uppercase font-subheading text-2xl sm:text-3xl tracking-widest">
          <span>{repeatedTextRight}</span>
        </div>
        <div className="animate-[ticker-reverse_35s_linear_infinite] flex shrink-0 min-w-full justify-around uppercase font-subheading text-2xl sm:text-3xl tracking-widest" aria-hidden="true">
          <span>{repeatedTextRight}</span>
        </div>
      </div>
    </div>
  );
}
