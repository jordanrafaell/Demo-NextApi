'use client'
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'
const { motion, Script, React } = libs

const Banner = () => (
  <section className='Banner'>
    <div className="container_banner">
      <motion.div className="container_text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -100 }}
        transition={{ duration: 3 }}
      >
        <h1>Connect to the Future of Integrations</h1>
        <h2>Powerful APIs for Smart Business Solutions</h2>
        <p>Discover how our APIs can transform your processes, streamlining integrations and automations to boost your business efficiency.</p>
        <div className="container_buttons">
          <button className="btn_explore">
            <span>
              Explore Api
            </span>
          </button>
          <button className='btn_started'>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin='round' className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Get Started
          </button>
        </div>
      </motion.div>
      <div className="container_img">
        <img src="/images/banners/banner.png" alt="Imagem ilustrativa" />
      </div>
    </div>
  </section>

);

export default Banner;
