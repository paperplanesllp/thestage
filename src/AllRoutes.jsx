import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../src/pages/homepage/Home'
import About from '../src/pages/aboutpage/About'
import Header from './components/Header';
import ContactUs from './pages/contactpage/ContactUs';
import Archives from './pages/archivespage/Archives'
import Footer from './components/Footer';
import MembershipForm from './pages/membershippage/Membership';
import Programs from './pages/programspage/Programs';
import Pnf from './pages/Pnf';
import Store from './pages/storepage/Store';
import ArchivesDetail from './pages/archivespage/archives_components/ArchivesDetail';
import StoreCheckout from './pages/storepage/storecomponents/StoreCheckout';
import StageMagazine from './pages/magazine/StageMagazine';
import Events from './pages/eventspage/Events'
import EventAttend from './pages/eventspage/events_components/EventAttend'
import AboutBrochure from './pages/aboutpage/about_components/AboutBrochure';
import ScrollToTop from './pages/volunteerpage/ScrollToTop';
import AdminLogin from './pages/adminpage/AdminLogin';
import AdminDashboard from './pages/adminpage/AdminDashboard';
import AdminEventsManager from './pages/adminpage/AdminEventsManager';

const AllRoutes = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/login' || location.pathname.startsWith('/admin');
    
  return (
  <>
      
      {!isAdminRoute && <Header/>}
        <ScrollToTop/>
      <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact_us' element={<ContactUs/>}></Route>
          <Route path='/about_the_stage' element={<About/>} ></Route>
          <Route path='/archives_the_stage' element={<Archives/>}></Route>
          <Route path='/membership_the_stage/:group' element={<MembershipForm/>}></Route>
          <Route path='/the_stage_programs' element={<Programs/>}></Route>
          <Route path='/archives_details' element={<ArchivesDetail/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/the_stage_magazine' element={<StageMagazine/>}></Route>
          <Route path='*' element={<Pnf/>}></Route>
          <Route path='/store_checkout' element={<StoreCheckout/>}></Route>
          <Route path='/the_stage_events' element={<Events/>}></Route>
          <Route path='/event_attend' element={<EventAttend/>}></Route>
          <Route path='/stage_brochure' element={<AboutBrochure/>}></Route>
          <Route path='/login' element={<AdminLogin/>}></Route>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
          <Route path='/admin/events' element={<AdminEventsManager/>}></Route>
      </Routes>
          {!isAdminRoute && <Footer/>}
  </>
  )
}

export default AllRoutes