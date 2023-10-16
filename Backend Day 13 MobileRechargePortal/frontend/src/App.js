import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Assets/CSS/App.css';
import Sign from './component/Sign';
import Home from './component/Home';
import Login from './component/Login';
import Profile from './component/Profile';
import Recharge from './component/Recharge';
import Offer from './component/Offer';
import Faqjsx from './component/Faqjsx';
import { Successful } from './component/successful';
import Privacyjsx from './component/Privacyjsx';
import About from './component/About';
import TermsAndConditions from './component/Termsandconditions';
import MobileRechargeCreate from './component/MobileRechargeCreate';
import axios from 'axios';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Sign/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/Recharge' element={<MobileRechargeCreate/>}></Route>
          <Route path='/Offer' element={<Offer/>}></Route>
          <Route path='/faq' element={<Faqjsx/>}></Route>
          <Route path='/successful' element={<Successful/>}></Route>
          <Route path='/Privacy' element={<Privacyjsx/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Terms' element={<TermsAndConditions/>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
