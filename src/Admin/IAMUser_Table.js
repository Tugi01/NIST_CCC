import React from 'react'
import { useCookies } from 'react-cookie';


const IAMUser_Table = () => {
  const [cookie] = useCookies();


  return <section>
    {
      (cookie.admin_data && cookie.admin_data.email !== 'dmondal.it.2018@nist.edu')
        ? <div class="alert alert-danger" role="alert">
          It's seems that you are a <b>Admin</b> not a Super Admin, kindly contact the creator of Site.
        </div>
        : <section className="blogs container" style={{ marginTop: '-10%' }}>
          <div className="card p-5  shadow-lg text-center"
            style={{ marginTop: '20%', marginBottom: '20%', borderRadius: 20, border: 'none' }}>
            <h1> <span><b>IAM Users</b></span> Loading Soon... &nbsp; <i className="far fa-smile"></i> </h1>
          </div>
        </section>
    }
  </section>
}

export default IAMUser_Table
