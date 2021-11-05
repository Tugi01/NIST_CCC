/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useCookies } from 'react-cookie';
const adminAuthContext = createContext();



const AdminContext = ({ children }) => {
  const [c, setCookie] = useCookies();

  const allowAccess = (email, userfound) => {
    setCookie('admin_data', JSON.stringify(userfound));
    setTimeout(() => {
      window.location.href = '/admin/dashboard';
    }, 1000);
  }




  return <adminAuthContext.Provider value={{
    allowAccess
  }}>
    {children}
  </adminAuthContext.Provider>
};



export { AdminContext, adminAuthContext };