import React from 'react'
import { useLocation } from 'react-use';
import AdminCard from './AdminCard';
import HiringTable from './HiringTable';
import RegisterTable from './RegisterTable';




const AdminConditional = () => {
  const loc = useLocation();


  if (loc.pathname === '/admin/register') {
    return <RegisterTable />
  }
  if (loc.pathname === '/admin/hiring--details') {
    return <HiringTable />
  }
  return <AdminCard />
}

export default AdminConditional;
