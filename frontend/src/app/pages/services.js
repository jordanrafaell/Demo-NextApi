'use client'
import libs from '../utils/libs/libs.js'
import '../utils/import-css/style.js'
const { motion, Script, React } = libs


const Services = () => (
  <>
    <section className='Services'>
      <div className="container_services">
        <div className='container_card_services'>

          <div className="card_services">
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <h2>Secure Authentication</h2>
              <p><strong>Code:</strong> An example of a login route using Express.js. This API validates the provided credentials and, if correct, returns an authentication token that can be used to access other secure areas of the system.</p>
              <p><strong>Description:</strong> Ensure the security of your users with our authentication API, offering a quick and reliable solution for access control in modern applications.</p>
            </motion.div>
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_1.png" alt="" />
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_2.png" alt="" />
            </motion.div>
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <h2>Inventory Management</h2>
              <p><strong>Code:</strong> An API that manages inventory, with routes to list available items and add new products. It keeps the inventory control up to date, facilitating the management of large volumes of items.</p>
              <p><strong>Description:</strong> Keep your inventory under control in real time, avoiding shortages or excesses, with our efficient and easy-to-integrate API for any platform.</p>
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <h2>Payment Processing</h2>
              <p><strong>Code:</strong> A payment processing API that validates the payment method and processes the transaction. This API ensures that payments are made securely and efficiently, supporting multiple payment methods.</p>
              <p><strong>Description:</strong> Simplify payment processing and enhance the customer experience with our API that supports multiple methods, ensuring secure and fast transactions.</p>
            </motion.div>
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_3.png" alt="" />
            </motion.div>
          </div>

          <div className="card_services">
            <motion.div className="container_img_services"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: 50 }}
              transition={{ duration: 3 }}
            >
              <img src="images/banners/api_4.png" alt="" />
            </motion.div>
            <motion.div className="container_text_card_services"
              initial={{ opacity: 0, x: 0, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 1, x: 0, y: -50 }}
              transition={{ duration: 3 }}
            >
              <h2>Email Notifications</h2>
              <p><strong>Code:</strong> An API dedicated to sending email notifications. It receives message details through a POST request and sends the email. Ideal for keeping your users informed about updates and events.</p>
              <p><strong>Description:</strong> Automate communication with your users through our email API, which makes it easy to send personalized notifications directly from your application, keeping them always informed.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  </>
)

export default Services


