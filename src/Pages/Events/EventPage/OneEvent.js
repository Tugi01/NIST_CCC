import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { eventDetails } from '../../../Component/Data/eventDetails';
import { GlobalContext } from '../../../Context';
import ModalRegister from './ModalRegister';
import ViewTicket from './ViewTicket';



const OneEvent = () => {
  const [value] = useState(eventDetails[0]);
  const { setRegisterModal } = useContext(GlobalContext);
  var getUserItem = localStorage.getItem('user_data');

  const someFun1 = () => {
    document.getElementById('view-ticket').scrollIntoView({ behavior: "smooth" });
  }

  return <section className="container event--brief--section">
    <ModalRegister />
    <div style={{ margin: '10% 0px' }}>
      <Link to="/events-all" className="link_to_member">
        <article className="event--back_btn">
          <i className="fas fa-long-arrow-alt-left fa-2x"></i>
        </article>
      </Link>
      <main>
        <h1 className='text-left'>{value.name} <i className="fas fa-calendar-check"></i> </h1>
        {
          getUserItem === null ? <article className="register--btn" onClick={() => setRegisterModal(true)}>
            <button className="btn btn-primary shadow-lg">
              Register Here &nbsp; <i className="fas fa-plus"></i>
            </button>
          </article> : <article className="register--btn" onClick={() => someFun1()}>
            <button className="btn btn-primary shadow-lg" style={{ letterSpacing: 2 }}>
              View Ticket &nbsp; <i className="fas fa-ribbon"></i>
            </button>
          </article>
        }
      </main>
      <div className="card shadow  text-center p-0">
        <p className="event-describe p-4">{value.describe}</p>
        <div className="event-extra">
          <p className='badge bg-info'>2 Days Workshops</p>
        </div>
        <article className="event--info">
          <h6>Timings 👇 </h6>
          {
            (getUserItem) ? <article className="badge--register">
              <span className="registered--badge badge shadow-lg"> Registered 🎉🥳</span>
            </article> : null
          }
          <div className="timings"  id="view-ticket">
            <br />
            <p className="date"><b>Date:</b> 5<sup>th</sup> - 6<sup>th</sup> of November</p>
            <p><b>Time:</b> 2:30 pm to 5:30pm</p>
          </div>
        </article>
        <article className="place">
          <p className="badge bg-warning">Venue: LHC - 407</p>
        </article>
      </div>
    </div>
    {
      getUserItem ? <ViewTicket getItem={getUserItem} /> : null
    }
  </section>
}

export default OneEvent;
