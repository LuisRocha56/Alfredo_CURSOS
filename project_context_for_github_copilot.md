# Contexto del Proyecto: Academy OS (Plataforma Privada de Capacitación)

## Descripción General
Academy OS es una aplicación web web-based (independiente de dominios corporativos masivos) diseñada para gestionar capacitaciones privadas a empleados, con control de acceso por 1 año de vigencia y seguimiento de progreso en cursos (presentaciones y videos). El despliegue se realiza en Vercel.

## Decisiones Técnicas y de Arquitectura
- **Frontend:** HTML5, Tailwind CSS (vía CDN con configuración personalizada para modo oscuro), JavaScript vanilla (migrable a Next.js / React en fases posteriores).
- **Estética Visual (Anti-UI-Slop):** 
  - Estilo "Editorial Técnico / Data-Brutalism Suave".
  - Evitar plantillas genéricas (nada de gradientes pastel o sombras exageradas).
  - Uso de fondos oscuros profundos (`#121214`), tarjetas estructuradas (`#1c1c21`), bordes precisos (`#2e2e36`), y acentos de color técnico/neón (`#00F0FF`).
  - Tipografías: `Space Grotesk` para títulos/elementos técnicos y `Inter` para cuerpo.
- **Autenticación y Ciclo de Vida:**
  - Registro inicial por empleado (Nombre, Correo, Área, Contraseña).
  - Duración de acceso: **1 año exacto** calculado dinámicamente (`expires_at = created_at + 365 días`).
  - Persistencia de sesión mediante almacenamiento local (`localStorage`) simulando base de datos, con proyección a PostgreSQL en Vercel.
- **Estructura de Vistas Actuales:**
  - `login.html`: Autenticación inteligente (detecta si el usuario ya existe o es nuevo).
  - `index.html`: Panel de colaborador (muestra datos del usuario, caducidad restante de la licencia y lista de cursos asignados).
  - `curso.html`: Visor moderno de cursos (reemplazo de interfaces SCORM antiguas, con menú lateral de módulos, visualización de diapositivas/infografías y reproductor de video).

## Estándares de Código y Directrices para Copilot
- Mantener las clases de Tailwind CSS coherentes con la paleta de colores definida.
- Preservar la limpieza de código, evitando dependencias externas pesadas a menos que sea estrictamente necesario.
- Priorizar la experiencia fluida, diseño responsivo y rendimiento rápido.

## Prototipo local
- Inicia en `login.html`, registra una cuenta de prueba y selecciona el rol de demostración. El administrador puede crear cursos con módulos PDF, imágenes o videos; el miembro solo puede consultarlos.
- Los datos y archivos se guardan únicamente en el navegador y están sujetos a su límite de almacenamiento. Para presentaciones, usa archivos PDF.
- Los roles y contraseñas son simulados y no ofrecen seguridad real. No uses datos reales ni publiques este prototipo como plataforma privada sin autenticación y almacenamiento en un servidor.