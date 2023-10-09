import { Button } from 'bootstrap';
import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import store from '../Redux/Store';
import { Link } from 'react-router-dom';
const Login = () => {
    const nav = useNavigate()
    const [login,setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        store.dispatch({
          type :  "login",
          payload : login
        })
        nav("/recharge")

      };
    const handleRoute=()=>{
       nav('/register')
    }
    
  return (
    <>
    <div className="main d-flex-c">
    <form onSubmit={handleSubmit}>
    <div className="auth-form d-flex-c">
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required minLength={8} maxLength={15}/>
        <button type="submit" className='auth-btn'>Login</button>
    </div>
    <h5 >A new customer?  <span className='text-link' onClick={handleRoute}>Register </span></h5>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Login