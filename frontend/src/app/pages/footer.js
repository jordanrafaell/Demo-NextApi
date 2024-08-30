'use client'
import libs from '../utils/libs/libs.js'
import '../styles/plans.css'
const { motion, Script, React } = libs


const Footer = () => (
  <>
  <footer class="footer">
  <div class="footer__top">
    <div class="footer__logo">
      <img src="/images/logos/logo_menu.png" alt="NextAPI Logo" />
      <p>Your gateway to seamless API integrations.</p>
    </div>
    
    <div class="footer__links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#docs">Documentation</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
    
    <div class="footer__resources">
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

    <div class="footer__contact">
      <h4>Contact Us</h4>
      <p>Have any questions or need support? Reach out to us!</p>
      <form action="mailto:support@nextapi.com" method="post" enctype="text/plain">
        <input type="email" name="email" id="email" placeholder="Your email address" required />
        <textarea name="message" id="message" placeholder="Your message" rows="3" required></textarea>
        <button type="submit" class="footer__button">Send Email</button>
      </form>
    </div>
  </div>

  <div class="footer__bottom">
    <p>&copy; 2024 NextAPI. All Rights Reserved.</p>
  </div>
</footer>


  </>
)

export default Footer
