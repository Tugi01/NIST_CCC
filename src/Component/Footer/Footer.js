import React from 'react';
import FooterContact from './FooterContact';




const Footer = () => {
  return <section className="footer--section card shadow-lg" id="contact-sect">
    <div className="container">
      <article className="footer--head">
        <p><img width="100" height="140" src="https://i.ibb.co/VBCyyGk/logo-cutted.png" alt="" /></p>
        <p className="head">NIST CCC</p>
      </article>
      <div className="row">
        <article className="lists col-md-3">
          <li>Members</li>
          <li>Events</li>
          <li>Privacy Policy</li>
          <li>Tech</li>
        </article>
        <article className="lists col-md-3">
          <li>Blogs</li>
          <li>Hire Me</li>
        </article>
        <section className="contact--section col-md-5">
          <FooterContact />
        </section>
        <section className="col-md-1"></section>
      </div>
    </div>

    <section className="copyright--section card">
      2016-21 &copy; All right reserved @nistccc
    </section>
  </section>
}

export default Footer
