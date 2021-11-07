import React from 'react'
import { useLocation } from 'react-use';
import AdminCard from './AdminCard';
import RegisterTable from './RegisterTable';




const AdminConditional = () => {
  const loc = useLocation();


  if (loc.pathname === '/admin/register') {
    return <RegisterTable />
  }
  return <AdminCard />
}

export default AdminConditional;
