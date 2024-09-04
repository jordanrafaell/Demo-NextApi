'use client'
import libs from '../utils/libs/libs.js'
import '../styles/plans.css'
const { motion, Script, React } = libs

const Plans = () => (
  <>
    <section className='Plans' id='Plans'>
      <div className="container_cards_plans cards__inner">
        <motion.div className="cards__card card_plans"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 1 }}

        >
          <p className="card__heading">Free Plan</p>
          <p className="card__price">$0/month</p>
          <ul className="card__bullets flow" role="list">
            <li>Access to all basic features</li>
            <li>5 GB storage</li>
            <li>Community support</li>
            <li>No ads</li>
            <li>Limited API requests</li>
          </ul>
          <a className="card__cta cta" href="#free">Get Started</a>
        </motion.div>

        <motion.div className="cards__card card_plans"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 2 }}
        >
          <p className="card__heading">Pro Plan</p>
          <p className="card__price">$15/month</p>
          <ul className="card__bullets flow" role="list">
            <li>Access to all premium features</li>
            <li>100 GB storage</li>
            <li>Priority support</li>
            <li>Customizable dashboard</li>
            <li>Unlimited API requests</li>
          </ul>
          <a className="card__cta cta" href="#pro">Choose Pro</a>
        </motion.div>

        <motion.div className="cards__card card_plans"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 3 }}
        >
          <p className="card__heading">Enterprise Plan</p>
          <p className="card__price">$49/month</p>
          <ul className="card__bullets flow" role="list">
            <li>All features from Pro Plan</li>
            <li>1 TB storage</li>
            <li>24/7 dedicated support</li>
            <li>Advanced analytics and reporting</li>
            <li>Custom API integrations</li>
            <li>Team collaboration tools</li>
          </ul>
          <a className="card__cta cta" href="#enterprise">Get Enterprise</a>
        </motion.div>


      </div>
    </section>
  </>
);

export default Plans
