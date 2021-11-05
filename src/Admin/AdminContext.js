/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { useCookies } from 'react-cookie';
const adminAuthContext = createContext();



const AdminContext = ({ children }) => {
  const [c, setCookie, removeCookie] = useCookies();

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




  return <adminAuthContext.Provider value={{
    allowAccess,
    logout
  }}>
    {children}
  </adminAuthContext.Provider>
};



export { AdminContext, adminAuthContext };