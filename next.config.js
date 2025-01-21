/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Desactiva la optimización automática de imágenes.
    },
    output: "export", // Configura la exportación como estática.
  };
  
  module.exports = nextConfig;
  