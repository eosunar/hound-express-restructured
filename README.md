# Hound Express

Sistema de gestión de guías de transporte desarrollado con Next.js, TypeScript, Tailwind CSS y Prisma.

## Características

- ✅ Next.js 14 con App Router
- ✅ TypeScript para tipado estático
- ✅ Tailwind CSS para estilos
- ✅ Prisma como ORM
- ✅ Componentes UI con Radix UI
- ✅ Autenticación con NextAuth.js
- ✅ Gestión de estado con Zustand
- ✅ Formularios con React Hook Form
- ✅ Gráficos con Chart.js y Plotly.js

## Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd hound-express
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Configura la base de datos:
```bash
npm run db:generate
npm run db:push
```

5. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige automáticamente los errores de linting
- `npm run type-check` - Verifica los tipos de TypeScript
- `npm run db:generate` - Genera el cliente de Prisma
- `npm run db:push` - Sincroniza el esquema con la base de datos
- `npm run db:seed` - Ejecuta el seed de la base de datos

## Estructura del Proyecto

```
hound-express/
├── app/                    # App Router de Next.js
├── components/            # Componentes reutilizables
│   └── ui/               # Componentes de UI base
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── prisma/               # Esquema y migraciones de Prisma
├── types/                # Definiciones de tipos TypeScript
└── public/               # Archivos estáticos
```

## Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de datos**: Prisma ORM
- **UI Components**: Radix UI
- **Autenticación**: NextAuth.js
- **Estado**: Zustand
- **Formularios**: React Hook Form + Zod
- **Gráficos**: Chart.js, Plotly.js, Recharts

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.