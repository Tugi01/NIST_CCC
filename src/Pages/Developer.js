import React from 'react'


const Developer = () => {
  return <section className="developer--section container">
    {/* <h1> <span>Developer</span> Updating Soon... &nbsp; <i className="far fa-smile"></i> </h1> */}
    <article className="card shadow">
      <img src="https://avatars.githubusercontent.com/u/52108126?v=4" alt="developer" />
      <div>
        <h1>Debarshi Mondal</h1>
      </div>
      <section className="developer--text">
        <h3>Developer</h3>
      </section>
    </article>
    <article className="card shadow">
      <img src="https://avatars.githubusercontent.com/u/52108126?v=4" alt="desginer" />
      <div className="">
        <h1>Sutari Sunil Reddy</h1>
      </div>
      <section className="developer--text">
        <h3>Designer</h3>
      </section>
    </article>
  </section>
}

export default Developer;
