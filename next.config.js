/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Desactiva la optimización automática de imágenes
    },
    output: "export", // Exportación estática para sitios estáticos
    basePath: "", // No se usa un subdirectorio base
  };
  
  module.exports = nextConfig;
  