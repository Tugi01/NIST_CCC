import React from 'react'


const ViewTicket = ({ getItem }) => {
  var items = JSON.parse(getItem);

  console.log(items);


  return <section className="view--ticket" style={{ marginTop: '-5%' }}>
    <h1> User Details</h1>
    <div style={{ marginTop: '-3%', padding: '20px' }} className="card shadow-lg">
      <h2>Ticket ID: #{(items.ticketId && items.ticketId.S) ? items.ticketId.S : items.ticket}</h2>
      <p>Name: {(items.name && items.name.S) ? items.name.S : items.fullname}</p>
      <p>Email: {(items.emailId && items.emailId.S) ? items.emailId.S : items.email}</p>
      <p>Contact: {(items.contact && items.contact.S) ? items.contact.S : items.contact}</p>
      <p>Roll No: {(items.rollno && items.rollno.S) ? items.rollno.S : items.rollno}</p>
    </div>
  </section>
}

export default ViewTicket
