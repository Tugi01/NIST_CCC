import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


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
      <section className="event--details--section">
        <div className="event--card card shadow">
          <p className="badge bg-warning">Upcoming</p>
          <main className="">
            <h3>Serverless in Action</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum deleniti illo culpa adipisci consequatur veniam quo iste!
              Commodi, recusandae harum explicabo id repellat,
              labore libero temporibus accusamus, excepturi beatae cupiditate!
            </p>
            <article>
              <h6>Date: 26th Sep 2021</h6>
            </article>
            <button className="btn btn-primary">
              Check Details
            </button>
          </main>
          <main className="">
            <img width="160" height="180"
              src="https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/serverless_bze.png" alt="" />
          </main>
        </div>
      </section>
    </div>
  )
}

export default EventDetails
