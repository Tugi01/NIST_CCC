import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { club_member_details } from '../../Component/Data/memberDetails';
import { GlobalContext } from '../../Context';
import './member.css';


const Members = () => {
  document.body.style.backgroundColor = 'whitesmoke';
  const { setMemberDetails } = useContext(GlobalContext);
  const [details] = useState(club_member_details);


  return <section className="container member--section">
    <h1>Club Memberss</h1>
    <article className="">
      <main className="member--lists">
        {
          details && details.map((item) => {
            const { firstname, profile_img, member_type } = item;
            return <Link to="/members/brief" onClick={() => setMemberDetails(item)} className="link_to_brief" >
              <div className="card member--div">
                <div className="member--img">
                  <img class="card-img-top" src={profile_img} alt="Card cap" />
                  <p>{firstname}</p>
                </div>
                <div class="card-body mt-2">
                  <h5 class="card-title">{member_type}</h5>
                </div>
              </div>
            </Link>
          })
        }
      </main>
    </article>
  </section>
}

export default Members
