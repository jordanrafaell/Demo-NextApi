'use client'
// register.js

import libs from '../../utils/libs/libs.js'
import '../../utils/import-css/style.js'
const { motion, Script, React, FontAwesomeIcon, faGithub, faGoogle, faFacebookF, faLinkedin } = libs

export default function Register() {
  return (
    <>
      <section className='login'>
        <div className="container_login">
          <div className="container_information">
            <div className="container_logo_login">
              <a href="/" ><img src="/images/logos/logo_menu.png" alt="Logo menu" /></a>
                <a href="/">NextApi</a>
            </div>
            <div className="container_title_login">
              <h2>Create Your Account</h2>
              <p>Sign up now to start integrating our powerful APIs into your applications.</p>
              <br />
              <br />
              <br />
              <h2>Why Choose Us?</h2>
              <p>Experience seamless API integration with strong security and easy management.</p>
              <br />
              <br />
              <br />
              <h2>Get Started Quickly</h2>
              <p>Register now and take the first step towards efficient API management.</p>
            </div>
          </div>

          <div className="container_input_users">

            <div className="container_types_login">


              <div className="container_logo_login active_logo">
                <a href="/" ><img src="/images/logos/logo_menu.png" alt="Logo menu" /></a>
                <a href="/">NextApi</a>
              </div>

              <button className='btn_login'>
                <p>Login with Google</p>
                <FontAwesomeIcon icon={faGoogle} className='icon_style' />
              </button>
              <button className='btn_login'>
                <p>Login with GitHub</p>
                <FontAwesomeIcon icon={faGithub} className='icon_style' />
              </button>
              <button className='btn_login'>
                <p>Login with LinkedIn</p>
                <FontAwesomeIcon icon={faLinkedin} className='icon_style' />
              </button>
              <button className='btn_login'>
                <p>Login with Facebook</p>
                <FontAwesomeIcon icon={faFacebookF} className='icon_style' />
              </button>

            </div>

            <form action="" method="post" id='form_register'>
              <div className='div_input'>
                <input type="email" name="email" id="create_email" className='input_user' placeholder='Your email address:' />
                <input type="email" name="email" id="confirm_email" className='input_user' placeholder='Confirm your email address:' />
              </div>
              <div className='div_input'>
                <input type="password" name="password" id="create_password" className='input_user' placeholder='Your password:' />
                <input type="password" name="password" id="confirm_password" className='input_user' placeholder='Confirm your password:' />
              </div>
              <button className="btn_explore login_btn" type='submit'>
                <span>
                  Register
                </span>
              </button>
              <p className='account_login'>Already have an account?  <a href="../login">   Login</a></p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
