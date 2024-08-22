'use client'
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'
const { motion, Script, React } = libs

const About = () => {

  return (

    <>
      <div id='About'></div>
      <section className="info-section">
        <motion.div className="container_info"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 1 }}
        >
          <h3>About Our Platform</h3>
          <p>Our platform offers a seamless integration experience, designed to streamline your business operations. With powerful tools and a user-friendly interface, we empower companies to achieve more with less effort. Join us and discover the future of integration.</p>
        </motion.div>

        <motion.div className="container_info"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}  
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 2 }}
        >
          <h3>Why Choose Us?</h3>
          <p>We provide top-tier security, scalability, and support to ensure your business runs smoothly. Our platform is built with reliability in mind, offering flexible solutions to meet your unique needs. Choose us and experience unmatched performance.</p>
        </motion.div>

        <motion.div className="container_info"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 100 }}
          transition={{ duration: 5 }}
        >
          <h3>Why Use Our APIs?</h3>
          <p>Our APIs are crafted to enhance efficiency and simplify processes. With easy-to-use documentation and robust support, integrating our APIs into your systems is a breeze. Leverage our APIs to unlock new possibilities and drive innovation.</p>
        </motion.div>
        <motion.div className="container_background"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 4 }}
        ></motion.div>
      </section>

      <section className='Apis' id='Apis'>
        <div className='line'></div>
        <div className='container_text_apis'>
          <motion.h2
            initial={{ opacity: 0, x: 0, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 5, }}
          >APIs Ready to Power Your Solutions</motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 0, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 5, }}
          >Cutting-edge technology to streamline your development journey.</motion.p>
        </div>

        <div className="container_card">
          <motion.div className="card"
            initial={{ opacity: 0, x: -250, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 4.5, }}
          >
            <div className="card-body">
              <h2 className="card-title t1">Inventory Management</h2>
              <p className="card-text">Manage your products effortlessly by updating quantities, tracking sales, and automating reorders.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Real-time control</li>
                <li className="list-group-item">ERP Integration</li>
                <li className="list-group-item">Comprehensive reports</li>
                <div className="container_btn_explore">
                  <button className='btn_Api'><span className='box'>Explore</span></button>
                </div>
              </ul>
            </div>
          </motion.div>

          <motion.div className="card"
            initial={{ opacity: 0, x: -250, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 3.5, }}
          >
            <div className="card-body">
              <h2 className="card-title t2">Online Payments</h2>
              <p className="card-text">Simplify payment processing with our secure and reliable API, accepting multiple payment methods.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Card support</li>
                <li className="list-group-item">Recurring payments</li>
                <li className="list-group-item">Integrated gateways</li>
                <div className="container_btn_explore">
                  <button className='btn_Api'><span className='box'>Explore</span></button>
                </div>
              </ul>
            </div>
          </motion.div>

          <motion.div className="card"
            initial={{ opacity: 0, x: -250, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 2.5, }}
          >
            <div className="card-body">
              <h2 className="card-title t3">Secure Authentication</h2>
              <p className="card-text">Ensure the security of your users with our robust and easy-to-implement authentication API.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">OAuth authentication</li>
                <li className="list-group-item">Multiple providers</li>
                <li className="list-group-item">Token management</li>
                <div className="container_btn_explore">
                  <button className='btn_Api'><span className='box'>Explore</span></button>
                </div>
              </ul>
            </div>
          </motion.div>

          <motion.div className="card"
            initial={{ opacity: 0, x: -250, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 1, }}
            transition={{ duration: 1.5, }}
          >
            <div className="card-body">
              <h2 className="card-title t4">Email Sending</h2>
              <p className="card-text">Send transactional emails or marketing campaigns directly from your application using our email API.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Customizable templates</li>
                <li className="list-group-item">Contact management</li>
                <li className="list-group-item">Metrics monitoring</li>
                <div className="container_btn_explore">
                  <button className='btn_Api'><span className='box'>Explore</span></button>
                </div>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>





    </>
  )

}

export default About;