# Envíos DosRuedas - Plataforma de Logística y Mensajería

Plataforma web moderna y de alto rendimiento para **Envíos DosRuedas**, el servicio líder en mensajería de última milla, envíos Flex y soluciones e-commerce (3PL) en la ciudad de Mar del Plata, Argentina.

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías modernas y optimizadas para desarrollo ágil y rendimiento extremo:

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack y React 19)
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (con sistema de variables unificado y utilidades personalizadas)
*   **Animaciones:** [Motion / Framer Motion 12](https://motion.dev/) (física de resortes reactivos y entrada en cascada)
*   **Iconos:** [Lucide React](https://lucide.dev/) (icons vectoriales consistentes)
*   **IA:** [Google GenAI SDK](https://github.com/google/generative-ai-js) (`@google/genai` para el soporte de chat y cotizador asistido en tiempo real con `gemini-3.5-flash`)

---

## 📁 Estructura del Proyecto

El código fuente sigue las convenciones del App Router de Next.js estructurado de la siguiente forma:

```text
├── public/                       # Recursos estáticos (Logos, imágenes)
│   └── LogoEnviosDosRuedas.webp  # Logo oficial de la marca
├── src/
│   ├── app/                      # Rutas de la aplicación (App Router)
│   │   ├── api/                  # Endpoints backend
│   │   │   └── assistant/        # Endpoint para llamadas al SDK de Gemini
│   │   ├── contacto/             # Formulario de contacto
│   │   ├── cotizar/              # Calculadoras dinámicas (Express y LowCost)
│   │   ├── servicios/            # Páginas de servicios específicos
│   │   ├── globals.css           # Configuración de Tailwind CSS v4 y utilidades Neo-Brutalistas
│   │   ├── layout.tsx            # Layout raíz de la app
│   │   └── page.tsx              # Landing page principal
│   └── components/               # Componentes reactivos modulares
│       ├── home/                 # Componentes específicos de la Home (Hero, Servicios, Marquesinas)
│       └── layout/               # Encabezado (Header) y Pie de página (Footer) optimizados
├── DESIGN.md                     # Especificación del sistema de diseño (Colores, tipografías, anti-patrones)
└── guia-prompts.md               # Guía maestra de prompts funcionales para desarrollo asistido
```

---

## 🚀 Inicio Rápido (Desarrollo Local)

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

### Requisitos Previos

*   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
*   [pnpm](https://pnpm.io/) (o npm/yarn)

### Pasos de Instalación

1.  **Clonar e ingresar al proyecto:**
    ```bash
    cd 02enviosdosruedas
    ```

2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade tu API Key de Gemini:
    ```env
    GEMINI_API_KEY=tu_api_key_de_google_ai_studio
    ```

4.  **Ejecutar en modo de desarrollo:**
    ```bash
    pnpm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

5.  **Compilar para Producción:**
    ```bash
    pnpm run build
    ```
