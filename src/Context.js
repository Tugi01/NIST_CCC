import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const GlobalContext = createContext();


const Context = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [memberDetails, setMemberDetails] = useState({});
  const { pathname } = useLocation();

  

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return <GlobalContext.Provider value={{
    modalOpen,
    setModalOpen,
    closeModal,
    setCloseModal,
    memberDetails,
    setMemberDetails
  }}>
    {children}
  </GlobalContext.Provider>
}


export { Context, GlobalContext };
