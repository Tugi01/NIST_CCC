/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import './admin.css';
import axios from 'axios';
import ProcessSpinner from '../Component/Spinners/ProcessSpinner';
import MainSpinner from '../Component/Spinners/MainLoader';
import { adminAuthContext } from './AdminContext';
import { useLocation } from 'react-use';


const RegisterTable = () => {
  const { pathname } = useLocation();
  const { get_all_register_users, data, user_loader } = useContext(adminAuthContext);
  const [loading, setLoading] = useState({
    delete_loader: false,
    index: null
  });
  const [input, setInput] = useState('');
  useEffect(() => {
    get_all_register_users();
  }, [pathname]);


  const delete_user = (email, i) => {
    setLoading({ delete_loader: true, index: i });
    axios({
      method: 'get',
      url: `https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev/delete_user?email=${email}`,
    }).then(() => {
      setLoading({ delete_loader: false, index: null });
      get_all_register_users();
    }).catch((err) => {
      console.log(err);
    })
  };


  const sent_credentials = (email, name) => {
    var getName = name.split(' ')[0];
    console.log(getName);
    var configure = {
      inputs: {
        check: "credentials", email, name: `${getName}`
      }
    };
    var configure_inputs = {
      stateMachineArn: 'arn:aws:states:ap-south-1:143151111018:stateMachine:NIST_CCC_MACHINE',
      input: JSON.stringify(configure)
    };
    axios({
      method: 'POST',
      url: 'https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev',
      data: JSON.stringify(configure_inputs, null, 2)
    }).then((el) => {
      if (el.data && el.data.status === 'SUCCEEDED') {
        get_all_register_users();
      }
    })
  };



  var filterData = [];
  filterData = data && data.filter((items) => {
    return items.name.toLowerCase().includes(input.toLowerCase());
  });




  return <section className="view--request table-responsive ">
    <article className="operation">
      <h3>Registered User</h3>
      <input type="text" className="form-control" placeholder="Search by name"
        onChange={(e) => setInput(e.target.value)} />
    </article>
    {
      user_loader
        ? <MainSpinner />
        : <table className="table text-center table-borderless  table-hover">
          <thead className="table--head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ticket ID</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Cred</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table--body text-capitalize">
            {
              filterData && filterData.map((items, i) => {
                const { ticketId, emailId, contact, name, sent_cred } = items;
                return <tr key={i} style={{
                  cursor: 'pointer',
                  backgroundColor: (i % 2) === 0 ? 'white' : 'aliceblue'
                }}>
                  <td>{i + 1}</td>
                  <td className="text-uppercase"><b>#{ticketId}</b></td>
                  <td>{emailId}</td>
                  <td className="text-capitalize">{name}</td>
                  <td>{contact}</td>
                  <td>
                    {
                      sent_cred === 'YE'
                        ? <span className="badge" style={{
                          fontSize: 16, textTransform: 'capitalize', padding: '5px 20px', backgroundColor: 'lightgreen'
                        }}>Sent</span>
                        : <button onClick={() => sent_credentials(emailId, name)}
                          className="text-white btn btn-info btn--1"><i className="fas fa-check"></i></button>
                    }
                  </td>
                  <td>
                    <button onClick={() => delete_user(emailId, i)}
                      className="btn btn-danger">
                      {
                        (loading.delete_loader && i === loading.index) ? <ProcessSpinner /> : <i className="fas fa-trash"></i>
                      }
                    </button>
                  </td>
                </tr>
              })
            }
            {
              !filterData.length > 0 ? <tr style={{ fontSize: 20 }} className="p-1"><td>No User Found</td></tr> : null
            }
          </tbody>
        </table>
    }
  </section >
};

export default RegisterTable;
