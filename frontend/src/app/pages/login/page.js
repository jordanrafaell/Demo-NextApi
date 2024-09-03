'use client'
// login.js


import '../../utils/import-css/style.js'
import { motion } from 'framer-motion';
import Script from 'next/script';
import Link from 'next/link';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'; 

export default function Login() {
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
              <h2>Seamless API Integration</h2>
              <p>Connect your applications quickly with our intuitive APIs.</p>
              <br />
              <br />
              <br />
              <h2>Secure & Scalable</h2>
              <p>Enjoy robust security and scalability for your projects.</p>
              <br />
              <br />
              <br />
              <h2>Effortless Management</h2>
              <p>Manage your APIs easily and efficiently, all in one place.</p>
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

            <form action="" method="post" id='form_login'>
              <div className='div_input'>
                <input type="email" name="email" id="email_user" className='input_user' placeholder='Your email address:' />
              </div>
              <div className='div_input'>
                <input type="password" name="password" id="password_user" className='input_user' placeholder='Your password:' />
              </div>
              <button className="btn_explore login_btn" type='submit'>
                <span>
                  Login
                </span>
              </button>
              <p className='account_login'>Not a member? <a href="../register">Sign up</a></p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
