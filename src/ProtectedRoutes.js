import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route } from 'react-router-dom';



const ProtectedRoute = ({ component: Comp, ...rest }) => {
  const [cookie] = useCookies();
  return <Route {...rest}
    render={() => (cookie.admin_data) ? <Comp /> : <Redirect to='/admin' />
    }
  />
}


const SignInRoute = ({ component: Comp, ...rest }) => {
  const [cookie] = useCookies();
  return <Route {...rest}
    render={() => (cookie.admin_data) ? <Redirect to='/admin/dashboard' /> : <Comp />
    }
  />
}


export { ProtectedRoute, SignInRoute };