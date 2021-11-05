import React from 'react';
import './admin.css';
import { club_member_details } from '../Component/Data/memberDetails';


const Dashboard = () => {


  return <section className="container">
    <div className="cards--admin">
      <h1>Admin Dashboard <i className="fas fa-tachometer-alt"></i></h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-large font-weight-bold text-primary mb-1">
                    Registration (Total)
                  </div>
                  <div className="h1 mb-3 font-weight-bold text-gray-800">01</div>
                  <p>Event - Serverless in Action</p>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar-week fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-large font-weight-bold text-success mb-1">
                    Members (Total)
                  </div>
                  <div className="h1 mb-3 font-weight-bold text-gray-800">{club_member_details.length}</div>
                  <p>Club</p>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Dashboard;
