import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useState } from 'react/cjs/react.development';

const EventDetails = () => {
  const loc = useLocation();
  const [state, setState] = useState('');

  useEffect(() => {
    if (loc.pathname === '/events') {
      setState('All Events')
    }
    if (loc.pathname === '/events/upcoming') {
      setState('Upcoming')
    }
    if (loc.pathname === '/events/previous') {
      setState('Previous')
    }
  }, [loc]);



  return (
    <div className="mt-5 text-center" style={{ marginBottom: '15%' }}>
      <section>
        HI <b>{state}</b>
      </section>
    </div>
  )
}

export default EventDetails
