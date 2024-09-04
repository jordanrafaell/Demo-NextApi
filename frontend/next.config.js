// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Habilita a nova estrutura de diretórios `app`
  },
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
