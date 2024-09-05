'use client'
import libs from '../utils/libs/libs.js'
import '../styles/plans.css'
const { motion, Script, React } = libs


const Footer = () => (
  <>
  <footer className="footer" id='Contact'>
  <div className="footer__top">
    <div className="footer__logo">
      <img src="/images/logos/logo_menu.png" alt="NextAPI Logo" />
      <p>Your gateway to seamless API integrations.</p>
    </div>
    
    <div className="footer__links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#Docs">Documentation</a></li>
        <li><a href="#Plans">Pricing</a></li>
        <li><a href="#About">About Us</a></li>
        <li><a href="#Faq">FAQ</a></li>
      </ul>
    </div>
    
    <div className="footer__resources">
      <h4>Resources</h4>
      <ul>
        <li><a href="#api-guide">API Guide</a></li>
        <li><a href="#integration">Integration Support</a></li>
        <li><a href="#status">System Status</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>

    <div className="footer__contact">
      <h4>Contact Us</h4>
      <p>Have any questions or need support? Reach out to us!</p>
      <form action="mailto:support@nextapi.com" method="post" encType="text/plain">
        <input type="email" name="email" id="email" placeholder="Your email address" required />
        <textarea name="message" id="message" placeholder="Your message" rows="3" required></textarea>
        <button type="submit" className="footer__button">Send Email</button>
      </form>
    </div>
  </div>

  <div className="footer__bottom">
    <p>&copy; 2024 NextAPI. All Rights Reserved.</p>
  </div>
</footer>


  </>
)

export default Footer
