/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
const adminAuthContext = createContext();



const AdminContext = ({ children }) => {
  const [c, setCookie, removeCookie] = useCookies();
  const [data, setData] = useState([]);
  const [hireUser, setHireUser] = useState([]);
  const [user_loader, setUserLoader] = useState(false);



  const allowAccess = (email, userfound) => {
    setCookie('admin_data', JSON.stringify(userfound), { path: '/' });
    setTimeout(() => {
      window.location.href = '/admin/dashboard';
    }, 1000);
  }

  const logout = () => {
    removeCookie("admin_data", {
      path: "/",
    });
  };


  const get_all_register_users = () => {
    setUserLoader(true);
    axios({
      method: 'get',
      url: 'https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev/geteventuser',
    }).then((el) => {
      setUserLoader(false);
      setData(el.data);
    }).catch((err) => {
      console.log(err);
    })
  };

  const get_all_hiring_users = () => {
    setUserLoader(true);
    axios({
      method: 'get',
      url: 'https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev/get_hiring',
    }).then((el) => {
      setUserLoader(false);
      setHireUser(el.data);
    }).catch((err) => {
      console.log(err);
    })
  };



  return <adminAuthContext.Provider value={{
    allowAccess,
    logout,
    get_all_register_users,
    user_loader,
    data,
    get_all_hiring_users,
    hireUser
  }}>
    {children}
  </adminAuthContext.Provider>
};



export { AdminContext, adminAuthContext };