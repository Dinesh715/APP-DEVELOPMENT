import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './css/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Rechargejsx from './pages/Rechargejsx';
import Portaljsx from './pages/Portaljsx';
import Plansjsx from './pages/Plansjsx';
import Balancejsx from './pages/Balancejsx';
import Numberjsx from './pages/Numberjsx';
import SuccessPayjsx from './pages/SuccessPayjsx';
import Offersjsx from './pages/Offersjsx';
import RechargeHistoryjsx from './pages/RechargeHistoryjsx';
import Privacyjsx from './pages/Privacyjsx';
import TermsandConditions from './pages/TermsandConditions';
import Faqjsx from './pages/Faqjsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/recharge' element={<Rechargejsx/>}/>
      <Route exact path='/portal' element={<Portaljsx/>}/>
      <Route exact path='/plans' element={<Plansjsx/>}/>
      <Route exact path='/iservice' element={<Balancejsx/>}/>
      <Route exact path='/number' element={<Numberjsx/>}/>
      <Route exact path='/success' element={<SuccessPayjsx/>}/>
      <Route exact path='/offers' element={<Offersjsx/>}/>
      <Route exact path='/history' element={<RechargeHistoryjsx/>}/>
      <Route exact path='/privacy' element={<Privacyjsx/>}/>
      <Route exact path='/terms' element={<TermsandConditions/>}/>
      <Route exact path='/faq' element={<Faqjsx/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;