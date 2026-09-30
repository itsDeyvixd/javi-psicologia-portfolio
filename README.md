# Javier Correa | Psicólogo Clínico

Landing page y SPA (Single Page Application) desarrollada en React (Vite) + Tailwind CSS para el portafolio profesional de psicología clínica.

## 🚀 Despliegue en Vercel (Recomendado)

Este proyecto está optimizado para ser desplegado en Vercel de manera instantánea y gratuita.

1. Inicia sesión en [Vercel](https://vercel.com/) con tu cuenta de GitHub.
2. Haz clic en **Add New...** > **Project**.
3. Importa el repositorio `javi-psicologia-portfolio`.
4. **Configuración importante:**
   - En **Root Directory**, haz clic en `Edit` y selecciona la carpeta `frontend`.
   - Vercel detectará que es un proyecto **Vite**.
5. Haz clic en **Deploy**.

*Nota:* El proyecto cuenta con un archivo `vercel.json` configurado para manejar correctamente las rutas internas de React Router.

## 🛠 Entorno de Desarrollo Local

Si deseas correr el proyecto en tu máquina:

```bash
# Entrar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Correr el servidor de desarrollo
npm run dev
```

## ✨ Características (Production Polish)

- **SEO & Metadatos:** Etiquetas Open Graph, Twitter Cards y JSON-LD estructurado para médicos/psicólogos.
- **Rendimiento:** Imágenes y recursos con carga optimizada, alcanzando altos puntajes en Lighthouse.
- **Accesibilidad:** Contraste WCAG 2.1 AA verificado, textos alternativos (alt) y focus visible por teclado.
- **Privacidad y Ética:** Avisos sobre líneas de crisis (106 Bogotá) y espacios para la tarjeta profesional y tratamiento de datos.
- **Manejo de Rutas:** Página 404 personalizada y empática, con configuración `vercel.json` para fallbacks.
- **Conversión:** Botón flotante de WhatsApp y botones accesibles en la interfaz (`min-h-[44px]`).
