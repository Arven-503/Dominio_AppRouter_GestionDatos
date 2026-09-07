# Catálogo Tecnológico

Aplicación web desarrollada con Next.js (App Router) y Supabase para la gestión y visualización de un catálogo de productos estructurado por categorías.

## Tecnologías

- Next.js (App Router, Server Components)
- Supabase (PostgreSQL, Row Level Security)
- Tailwind CSS
- TypeScript

## Configuración local

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone [https://github.com/Arven-503/Dominio_AppRouter_GestionDatos.git](https://github.com/Arven-503/Dominio_AppRouter_GestionDatos.git)
cd Dominio_AppRouter_GestionDatos
npm install
```

### 2. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=[https://tu-proyecto.supabase.co](https://tu-proyecto.supabase.co)
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

### 3. Base de datos

Ejecuta el script de migración SQL en la consola de Supabase para generar las tablas `categorias` y `productos`, habilitar Row Level Security (RLS) y permitir el acceso de lectura pública.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura de rutas

- `/` - Página de inicio con la selección de categorías.
- `/categorias/[slug]` - Componente de servidor con productos filtrados por categoría.
- `/productos/[id]` - Detalle individual de producto con estados de carga (`loading.tsx`) y manejo de errores (`error.tsx`).