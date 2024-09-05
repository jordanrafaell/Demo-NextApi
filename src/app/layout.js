// pagina principal layout.js
import React from 'react';
import "./styles/globals.css";
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: "NextApi",
  description: "A NextApi é uma plataforma inovadora que oferece uma coleção de APIs para diversas funcionalidades, proporcionando integrações rápidas e eficientes para empresas e desenvolvedores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/styles/media.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap/5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        {children}
        <Script src="/scripts/scripts.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" strategy="lazyOnload" />

      </body>
    </html>
  );
}
