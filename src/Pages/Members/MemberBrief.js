import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../../Context';



const MemberBrief = () => {
  const history = useHistory();
  const { memberDetails } = useContext(GlobalContext);




  if (!memberDetails.member_type) {
    history.push('/members');
  }
  return <main className="member_brief container" style={{ marginTop: '8%', marginBottom: '10%' }}>
    <section className="row" style={{ marginTop: 50 }}>
      <div className="col-md-1">
        <Link to="/members" className="link_to_member">
          <article className="back_btn">
            <i className="fas fa-long-arrow-alt-left fa-2x"></i>
          </article>
        </Link>
      </div>
      <div className="col-md-5 mt-5">
        <div className="watch_img_card shadow-sm mb-5">
          <img src={memberDetails.profile_img}
            className="card-img-top" alt="..." />
        </div>
      </div >
      <div className="col-md-5 watch_desc_section" style={{ marginTop: '10rem' }}>
        <p style={{ fontSize: 20 }}>
          <span className="badge bg-info"> {memberDetails.member_type} </span>
        </p>
        <h2 className='name'>{memberDetails.fullname} </h2>
        <p>{memberDetails.desgination}</p>
        <article>
          {memberDetails.description && memberDetails.description.substring(0,200)}
        </article>
        <article className="socail--ids">
          <p><i className="fab fa-linkedin text-primary"></i></p>
          <p><i className="fab fa-github-square"></i></p>
        </article>
      </div>
      <div className="col-md-1"></div>
    </section >
  </main>
}

export default MemberBrief;
