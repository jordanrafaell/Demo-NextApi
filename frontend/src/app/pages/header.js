"use client"
// header.js
import React from 'react';
import Script from 'next/script';
import '../styles/header.css';
import '../styles/globals.css';
import '../styles/mediaQuery.css';



const Header = () => (
  <header className='header'>
    <div className="container_global">
      <div className='container_img_logo'>
        <a href="#home">
          <img className='logo_img' src="/images/logos/logo_menu.png" alt="Logo da plataforma" />
          <p><span className='n_text'>N</span>extApi</p>
        </a>
      </div>
      <nav className='nav_menu'>
        <ul className='list_ul'>
          <li>
            <a href='#home' >Home</a>
          </li>
          <li>
            <a href='#About'>About</a>
          </li>
          <li>
            <a href='#Apis'>Apis</a>
          </li>
          <li>
            <a href='#Docs'>Docs</a>
          </li>
          <li>
            <a href='#Plans'>Plans</a>
          </li>
          <li>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
      </nav>
        <div className='container_login_register'>
          <button>
            <a href='#login'>Login</a>
          </button>
          <button>
            <a href='#login'>Register</a>
          </button>
        </div>
      <button className='menu_hamburguer'>
        <ol type='none'>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </button>
    </div>
<Script src="/scripts/scripts.js" strategy="afterInteractive"/>
  </header>
);

export default Header;

