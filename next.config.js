/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    output: "export",
    assetPrefix: "./",
    trailingSlash: true, // Asegura que las rutas estáticas terminen en "/"
  };
  
  module.exports = nextConfig;
  