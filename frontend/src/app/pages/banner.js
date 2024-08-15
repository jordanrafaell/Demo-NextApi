import React from 'react';
import Script from 'next/script';
import '../styles/banner.css';
import '../styles/globals.css';
import '../styles/mediaQuery.css';

const Banner = () => (
  <section className='Banner'>
    <div className="img_background"></div>
    <div className="container_banner">
      <div className="container_text">
        <h1>Connect to the Future of Integrations</h1>
        <h2>Powerful APIs for Smart Business Solutions</h2>
        <p>Discover how our APIs can transform your processes, streamlining integrations and automations to boost your business efficiency.</p>
        <button class="btn_explore">
          <span>
            Explore Api
          </span>
        </button>
      </div>
      <div className="container_img">
        <img src="/images/banners/banner.png" alt="Imagem ilustrativa" />
      </div>
    </div>
  </section>

);

export default Banner;
