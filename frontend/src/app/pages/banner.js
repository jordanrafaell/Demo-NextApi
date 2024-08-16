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
        <div className="container_buttons">
          <button class="btn_explore">
            <span>
              Explore Api
            </span>
          </button>
          <button className='btn_started'>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Get Started
          </button>
        </div>
      </div>
      <div className="container_img">
        <img src="/images/banners/banner.png" alt="Imagem ilustrativa" />
      </div>
    </div>
  </section>

);

export default Banner;
