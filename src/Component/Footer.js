import React, { useState } from 'react'

const Footer = () => {
  const [value, setValue] = useState('');


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
          <form className={`card shadow contact_card`}>
            <h2>Contact Here</h2>
            <section className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First</label>
                <input type="text" className="form-control"
                  onChange={(e) => setValue({ ...value, firstname: e.target.value })} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last</label>
                <input type="text" className="form-control"
                  onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
              </div>
            </section>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control"
                onChange={(e) => setValue({ ...value, email: e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea type="text" className="form-control"
                onChange={(e) => setValue({ ...value, message: e.target.value })}></textarea>
            </div>
            <button type="button" className={`btn contact_btn`}
              onClick={() => ""}>
              Submit
            </button>
          </form>
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
