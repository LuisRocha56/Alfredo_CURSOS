# Instrucciones de Desarrollo para GitHub Copilot - Academy OS

Este archivo establece las directrices técnicas, de diseño y funcionales para el desarrollo del proyecto **Academy OS**, una plataforma privada de capacitación independiente orientada a colaboradores con control de acceso por 1 año y un visor de cursos moderno.

---

## 1. Contexto y Objetivos del Proyecto
* **Naturaleza:** Plataforma web privada de capacitación (independiente de dominios corporativos masivos) desplegada en **Vercel**.
* **Propósito:** Permitir el registro único y autenticación de usuarios, gestión de caducidad de licencias por **1 año exacto**, y visualización de cursos (presentaciones/diapositivas y videos) manteniendo el progreso.

---

## 2. Directrices de Diseño: Anti-UI-Slop (Editorial Técnico)
Para evitar interfaces genéricas o de plantilla, se deben seguir estrictamente las siguientes reglas visuales:
* **Estética:** *Data-Brutalism Suave* / Editorial técnico. Cero sombras exageradas, cero gradientes infantiles o ilustraciones 3D de plastilina.
* **Paleta de Colores (Modo Oscuro Obligatorio):**
  * Fondo principal: `#121214` (Gris antracita profundo).
  * Tarjetas / Superficies: `#1c1c21` con bordes precisos de 1px en `#2e2e36`.
  * Acento principal (CTAs, estados activos): `#00F0FF` (Cian neón técnico) o `#E5C158` (Ámbar industrial según contexto).
* **Tipografías:**
  * Títulos y elementos técnicos: `Space Grotesk`.
  * Cuerpo de texto y datos: `Inter`.

---

## 3. Arquitectura y Estructura de Archivos
El proyecto está compuesto por páginas HTML independientes estructuradas con Tailwind CSS (vía CDN o configuración local) y JavaScript vanilla (preparado para migración futura a Next.js):

1. **`login.html` (Autenticación Inteligente):**
   * Detecta si el correo ingresado ya existe en la "base de datos" simulada (`localStorage`).
   * Si no existe, despliega de forma fluida los campos de **Nombre Completo** y **Área / Departamento** para el registro inicial, calculando automáticamente la vigencia a 1 año (`expires_at = created_at + 365 días`).
   * Si existe, solicita únicamente la contraseña para iniciar sesión.

2. **`index.html` (Panel de Colaborador / Hub):**
   * Lee la sesión activa del usuario.
   * Muestra dinámicamente el saludo personalizado, las iniciales del avatar, el rol/área, los días restantes de la licencia de 1 año y la lista de cursos asignados con barras de progreso.

3. **`curso.html` (Reproductor / Visor de Cursos):**
   * Reemplaza las interfaces SCORM antiguas por un visor limpio con menú lateral de módulos (indicando estados: *Completado*, *En curso*, *Pendiente*).
   * Visor central adaptado para infografías, diapositivas de texto estructurado o videos corporativos.
   * Controles de navegación inferiores (`Anterior` / `Siguiente`).

---

## 4. Convenciones de Código para Copilot
* **Tailwind CSS:** Utilizar estrictamente clases utilitarias coherentes con los colores personalizados definidos (`darkbg`, `cardbg`, `bordercolor`, `accent`).
* **Clean Code:** Mantener scripts modulares dentro de cada vista o archivos dedicados, evitando dependencias externas innecesarias.
* **Persistencia:** Simular operaciones de base de datos mediante `localStorage` para el desarrollo frontend, asegurando compatibilidad futura con esquemas relacionales (PostgreSQL en Vercel).