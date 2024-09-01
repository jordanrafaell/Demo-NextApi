"use client"
// header.js
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'
const { motion, Script, React } = libs




const Header = () => (
  <header className='header' id='home'>
    <div className="container_global">
      <div className='container_img_logo'>
        <a href="/" onClick={() => window.location.reload()} >
          <img className='logo_img' src="/images/logos/logo_menu.png" alt="Logo da plataforma" />
          <p><span className='n_text'>N</span>extApi</p>
        </a>
      </div>
      <nav className='nav_menu'>
        <ul className='list_ul'>
          <li>
            <a href='/'>Home</a>
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
          <a href='/pages/login'>Login</a>
        </button>
        <button>
          <a href='/pages/register'>Register</a>
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
    <Script src="/scripts/scripts.js" strategy="afterInteractive" />
  </header>
);


export default Header;

