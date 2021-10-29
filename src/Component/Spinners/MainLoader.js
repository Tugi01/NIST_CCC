import React from 'react'
import Spin from '../../club_logo.png'
import './loader.css';


const MainLoader = () => {
  return <section className="spinner">
    <img src={Spin} width="80" height="120" alt="some" />
  </section>
}


export default MainLoader;
