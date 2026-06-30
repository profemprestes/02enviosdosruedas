# Guía de Prompts de Inicialización (Envíos DosRuedas)

Este archivo contiene el prompt único de inicialización del proyecto **Envíos DosRuedas**. Está diseñado para ser copiado y pegado en herramientas de generación de código (como Google Stitch u otros LLMs) para crear o estructurar toda la aplicación funcional y lógica de negocio desde cero, respetando la resolución de rutas de importación estándar.

---

## 🚀 Prompt Maestro de Inicialización (Copiar y Pegar)

```text
Crea e inicializa la estructura lógica y funcional completa para el proyecto de mensajería y logística "Envíos DosRuedas" utilizando Next.js 16 (App Router), React 19, Motion (Framer Motion 12) y Lucide React.

REGLAS DE DISEÑO DE ARCHIVOS Y RUTAS:
- Todas las importaciones de componentes deben resolverse mediante el alias de TypeScript estándar: "@/components/..." (por ejemplo: "@/components/layout/OptimizedHeader" o "@/components/home/DoubleTicker").
- Todas las importaciones de la estructura de la aplicación y servicios deben apuntar a: "@/app/..." (por ejemplo: "@/app/servicios/envios-express/lib/gemini").
- Evita de forma estricta el uso de alias incorrectos como "@/src/components/..." o "@/src/app/...". Toda importación debe mapear "src/app/" a "@/app/" y "src/components/" a "@/components/".

ESTRUCTURA DE ARCHIVOS A CREAR Y CONFIGURAR:

1. Layout y Envoltura Base (src/app/layout.tsx):
   - Importaglobals.css.
   - Carga las fuentes de Google: Inter, Anton, y Bebas_Neue. Configura sus variables CSS (--font-sans, --font-display, y --font-subheading).
   - Renderiza un envolvedor ClientLayout que envuelve el OptimizedHeader, el contenido del children, y el OptimizedFooter.

2. Barra de Navegación (src/components/layout/OptimizedHeader.tsx):
   - Carga el logo oficial desde "/LogoEnviosDosRuedas.webp" utilizando el componente <Image> de Next.js (42x42px, object-contain, con prioridad de carga).
   - Menú de navegación responsive para Escritorio y Móvil con links: Inicio (/), Servicios (Menú desplegable con links a: /servicios/envios-express, /servicios/envios-lowcost, /servicios/enviosflex, y /servicios/plan-emprendedores), Nosotros (Dropdown: /nosotros/sobre-nosotros, /nosotros/preguntas-frecuentes, /nosotros/nuestras-redes) y Contacto (/contacto).
   - Botón de cotización que redirija a "/cotizar/express" y un enlace telefónico directo a "+54 223 660-2699".
   - Soporte de transiciones y menús móviles animados usando Framer Motion y AnimatePresence.

3. Pie de Página (src/components/layout/OptimizedFooter.tsx):
   - Muestra el logo "/LogoEnviosDosRuedas.webp" sin fondos sólidos, enlaces de redes sociales (Instagram, Facebook, WhatsApp), datos de contacto principal ("Friuli 1972, Mar del Plata") y un grid responsive de enlaces de navegación internos.

4. Landing Page Principal (src/app/page.tsx) y Componentes de Inicio:
   - page.tsx: Llama secuencialmente a <HeroAnimado />, <DoubleTicker />, <VisionSection />, <ServicesOverview />, <SliderServicios />, <EmprendedoresHome />, <CtaSection /> y <CarruselRedes />.
   - src/components/home/DoubleTicker.tsx [NUEVO]: Componente que renderiza dos cintas marquesina de texto infinito deslizándose en direcciones opuestas. Una marquesina muestra servicios rápidos ("ENVÍOS EN EL DÍA • MAR DEL PLATA • MOTO COURIER...") y la otra muestra soluciones comerciales ("MERCADOLIBRE FLEX • ENVIOS EXPRESS • CUENTAS PYMES...").
   - src/components/home/HeroAnimado.tsx: Título principal de gran peso, bajada informativa de los servicios de paquetería local, y botones de CTA. Lista de ventajas táctiles (Seguro, Rápido, Cobertura).
   - src/components/home/VisionSection.tsx: Panel con estadísticas animadas (+5.000 clientes, 7 Años, Flota Dedicada) e información sobre la visión del negocio.
   - src/components/home/ServicesOverview.tsx: Grid para mapear las 4 soluciones principales con sus respectivas tarjetas informativas y botones de navegación individual.

5. Calculadora Dinámica de Envíos (src/app/cotizar/express/page.tsx):
   - Formulario de cotización de tres pasos (Paso 1: Direcciones de origen/destino y zonas de Mar del Plata; Paso 2: Detalles del paquete y horarios; Paso 3: Resumen de tarifas estimadas).
   - Utiliza react-hook-form para la validación de campos obligatorios en cada paso.
   - Genera un botón de confirmación en el paso final que abra un enlace a WhatsApp pre-completado con todos los datos del envío cotizado.

6. Endpoint de Asistente de IA (src/app/api/assistant/route.ts):
   - Expone un endpoint POST dinámico (export const dynamic = "force-dynamic").
   - Importa getGeminiClient desde "@/app/servicios/envios-express/lib/gemini" para inicializar el modelo "gemini-3.5-flash" del SDK oficial @google/genai.
   - Procesa la conversación del chat enviando un systemPrompt enriquecido con las reglas corporativas de Envíos DosRuedas (Friuli 1972, peso máximo 15 kg por moto, métodos de pago y zonas de Mar del Plata).

REGLA CRÍTICA DE DISEÑO VISUAL:
- Este prompt define estrictamente la estructura, rutas, dependencias de archivos y lógica funcional.
- Toda la configuración visual específica (como códigos de colores, familias tipográficas exactas, tamaños de bordes y sombras sólidas o difusas) debe ser leída directamente desde el archivo de diseño del proyecto (DESIGN.md) y aplicada de forma desacoplada usando variables y utilidades en globals.css.
```
