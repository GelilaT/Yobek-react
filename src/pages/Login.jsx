import React from 'react'
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const[username, setUsername] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/Login', {email, password})
    .then(res => {console.log(res)
      if (res.data === "Success"){
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    if (name === 'username'){
      setUsername(value)
    } else if (name === 'email'){
      setEmail(value)
    } else {
      setPassword(value)
    }
  }
  let usercheck = ""
  if( username === "" ){
    usercheck = ""
  } else {
    usercheck = "-translate-y-6"
  }
  let emailcheck = ""
  if (email === "" ){
    emailcheck = ""
  } else {  
    emailcheck = "-translate-y-6"
  }
  let passcheck = ""
  if (password === "" ){
    passcheck = ""
  } else {  
    passcheck = "-translate-y-6"
  }
  
  return (
    <div className='text-white h-[100vh] flex items-center justify-center bg-blue-400'>
      <div className='bg-slate-600 border border-slate-400 rounded-md p-20 
      shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
        <h1 className='text-4xl bold text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
        <div className='relative my-4'>
          
            <input type="username" required 
                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2
                border-gray-300 appearance-none dark:focus:border-white focus:outline-none focus:ring-0
                focus:text-white focus:border-white peer' placeholder=''
                onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="email" className={`absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
                peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white 
                peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ${usercheck}`}>Username</label>
          
          </div>

          <div className='relative my-4'>
              
              <input type="email" required 
              className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2
              border-gray-300 appearance-none dark:focus:border-white focus:outline-none focus:ring-0
              focus:text-white focus:border-white peer' placeholder=''
              onChange={(e) => setEmail(e.target.value)}/>

              <label htmlFor="email" className={`absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
              peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white 
              peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ${emailcheck}`}>Email</label>
          </div>

          <div className='relative my-4'>
              
              <input type="password" required
               className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2
               border-gray-300 appearance-none dark:focus:border-white focus:outline-none focus:ring-0
               focus:text-white focus:border-white peer' placeholder=''
               onChange={(e) => setPassword(e.target.value)}/>

              <label htmlFor="password" className={`absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] 
              peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white 
              peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 ${passcheck}`}>Password</label>
          </div>
          <button type='submit' className='w-full mb-4 mt-6 text-[18px] roundedbg-blue-500 py-2 hover:bg-white 
          hover:text-blue-400 transition-colors duration-300'>Login</button>
        </form>
        <p className='text-center'>Don't have an account? <Link to='/signup' className='text-white'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login
