import React from 'react'
import { NavLink } from 'react-router-dom';
import '../events.css';
import EventDetails from './EventDetails';

const EventPage = () => {
  return <section className="container event--page--section">
    <h2 className="">Event Page</h2>
    <article className="event--filter">
      <NavLink to="/events" className="filter--nav--link">
        <p>All Events</p>
      </NavLink>
      <NavLink to="/events/previous" className="filter--nav--link">
        <p>Previous</p>
      </NavLink>
      <NavLink to="/events/upcoming" className="filter--nav--link">
        <p>Upcoming</p>
      </NavLink>
    </article>
    <EventDetails />
  </section>
}

export default EventPage;
