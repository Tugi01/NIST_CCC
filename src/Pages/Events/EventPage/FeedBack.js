import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './register.css';
import ProcessSpinner from '../../../Component/Spinners/ProcessSpinner';



const FeedBack = ({ getItem }) => {
  var items = JSON.parse(getItem);
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);

  const send_feedback = () => {
    if (!value) return null;
    setLoad(true);
    var mailId = (items.emailId && items.emailId.S) ? items.emailId.S : items.email;
    axios({
      method: 'GET',
      url: `https://6svbsfa95h.execute-api.ap-south-1.amazonaws.com/dev/send_feedback?emailId=${mailId}&message=${value}`,
    }).then(() => {
      setLoad(false);
      toast.success('Thanks for Feedback!!!');
      setValue('');
    }).catch((err) => {
      console.log(err)
    })
  }

  return <section className="feedback--form">
    <div className="card p-5 shadow-lg">
      <h2>FeedBack</h2>
      <div className="col-md-6 mb-4">
        <label className="form-label" id="view-ticket">Message</label>
        <textarea type="text" value={value}
          onChange={(e) => setValue(e.target.value)} className="form-control" rows="8" cols="30" />
      </div>
      <div>
        <button className="btn" onClick={() => send_feedback()}>
          {
            load ? <ProcessSpinner /> : 'Submit'
          }
        </button>
      </div>
    </div>
  </section>
}

export default FeedBack;
