import React from 'react'
import { NavLink } from 'react-router-dom';
import '../events.css';
import EventDetails from './EventDetails';

const EventPage = () => {
  document.title = 'NIST CCC | Events';


  return <section className="container event--page--section">
    <h1 className="mb-3">Event Page</h1>
    <article className="event--filter">
      <NavLink to="/events-all" activeClassName="text-info" className="filter--nav--link">
        <p>All Events</p>
      </NavLink>
      <NavLink to="/events-previous" activeClassName="text-info" className="filter--nav--link">
        <p>Previous</p>
      </NavLink>
      <NavLink to="/events-upcoming" activeClassName="text-info" className="filter--nav--link">
        <p>Upcoming</p>
      </NavLink>
    </article>
    <EventDetails />
  </section>
}

export default EventPage;
