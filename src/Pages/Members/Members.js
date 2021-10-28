import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { club_member_details } from '../../Component/Data/memberDetails';
import { GlobalContext } from '../../Context';
import './member.css';


const Members = () => {
  document.body.style.backgroundColor = 'whitesmoke';
  const { setMemberDetails } = useContext(GlobalContext);
  const [details] = useState(club_member_details);



  details.sort((a, b) => a.year.localeCompare(b.year))
  details.sort((a, b) => b.member_type.localeCompare(a.member_type))


  return <section className="container member--section">
    <h1>Club Members</h1>
    <article className="">
      <main className="member--lists">
        {
          details && details.map((item) => {
            const { firstname, profile_img, member_type } = item;
            var images = profile_img && profile_img.includes('https')
              ? profile_img
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'

            return <Link to="/members/brief" onClick={() => setMemberDetails(item)} className="link_to_brief" >
              <div className="card member--div">
                <div className="member--img">
                  <img class="card-img-top" src={images} alt="Card cap" />
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
