import React, { useContext } from 'react'
import Navbar from './Component/Navigation/Navbar';
import SideBar from './Component/Navigation/SideBar'
import Home from './Pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GlobalContext } from './Context';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import Tech from './Pages/Tech';
import Members from './Pages/Members/Members';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import MemberBrief from './Pages/Members/MemberBrief';
import EventPage from './Pages/Events/EventPage/EventPage';



const App = () => {
  AOS.init();
  const { modalOpen } = useContext(GlobalContext);


  return <>
    <SideBar />
    <div className={`${modalOpen ? 'opacity--reduce' : null}`}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/events" component={EventPage} />
        <Route path="/events/upcoming" component={EventPage} />
        <Route path="/events/previous" component={EventPage} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/brief" component={MemberBrief} />
        <Route path="/tech" component={Tech} />
        <Route path="/contactus" component={Contact} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  </>
}

export default App;
