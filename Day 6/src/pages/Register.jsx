import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const nav = useNavigate()
const [login,setLogin]=useState({
    name:'',
    phone:0,
    email:'',
    password:''
})

const handleChange=(e)=>{
    e.preventDefault();
    setLogin({...login,[e.target.id]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Email : ${login.email} Password: ${login.password}')
    toast.success('Successfully toasted!')
    nav('/')
}


    const handleRoute=()=>{
       nav('/')
    }


  return (
    <>
    <div className="main reg">
    <form onSubmit={handleSubmit}>
    <div className="regform">
        <input type="name" name="name" id="name" className='input-field' placeholder='name' onChange={handleChange} required autoFocus/>
        <input type="mobile" name="phone" id="phone" className='input-field' placeholder='mobile' onChange={handleChange} required minLength={10} maxLength={10}/>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password (min 8 characters)' onChange={handleChange} required minLength={8} maxLength={15}/>
        <button type="submit" className='auth-btnn'>Register</button>
    </div>
    <h5 ><div className="aa">Have an account? </div><span className='text-link' onClick={handleRoute}>Login</span></h5>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Register