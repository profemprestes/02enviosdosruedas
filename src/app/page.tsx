import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import DoubleTicker from '@/components/home/DoubleTicker';
import VisionSection from '@/components/home/VisionSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import SliderServicios from '@/components/home/SliderServicios';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import CtaSection from '@/components/home/CtaSection';
import CarruselRedes from '@/components/layout/CarruselRedes';

export const metadata: Metadata = {
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.',
};

export default function Home() {
  return (
    <div id="home-page-container" className="w-full">
      {/* 1. Animated Hero Presentation */}
      <HeroAnimado />

      {/* Double Marquee Separator Ticker */}
      <DoubleTicker />

      {/* 2. Brand Vision Segment */}
      <VisionSection />

      {/* 3. Logistics Overview Solutions */}
      <ServicesOverview />

      {/* 4. Custom Tailored Solutions Slideshow */}
      <SliderServicios />

      {/* 5. Entrepreneurs and Businesses Solutions Panel */}
      <EmprendedoresHome />

      {/* 6. Call to Action High Conversion Segment */}
      <CtaSection />

      {/* 7. Social Community Integration */}
      <CarruselRedes />
    </div>
  );
}
