/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Desactiva la optimización de imágenes para exportaciones estáticas.
    },
    output: "export",
    trailingSlash: true, // Asegura que las rutas estáticas sean compatibles.
    assetPrefix: "/", // Configuración válida para recursos estáticos.
  };
  
  module.exports = nextConfig;
  