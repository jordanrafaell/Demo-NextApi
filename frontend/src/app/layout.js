import "../app/styles/globals.css";
import "../app/styles/header.css";
import Script from 'next/script';



export const metadata = {
  title: "NextApi",
  description: "A NextApi é uma plataforma inovadora que oferece uma coleção de APIs para diversas funcionalidades, proporcionando integrações rápidas e eficientes para empresas e desenvolvedores.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <Script src="/scripts/scripts.js" strategy="lazyOnload" />
      </head>
      <body >{children}
      </body>
      <Script src="/scripts/scripts.js"/>
    </html>
  );
}


