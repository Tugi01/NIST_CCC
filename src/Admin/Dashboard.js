import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
import AdminConditional from './AdminConditional';



const Dashboard = () => {


  return <section className="container">
    <div className="cards--admin">
      <h1 style={{ width: '100%' }}><Link to="/admin">Admin Dashboard <i className="fas fa-tachometer-alt"></i></Link></h1>
      <AdminConditional />
    </div>
  </section>
}

export default Dashboard;
