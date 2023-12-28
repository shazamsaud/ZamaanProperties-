import React from 'react'
import {Link , useNavigate} from "react-router-dom"
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'
import Oauth from '../components/Oauth.jsx'

export default function SignIn() {

  const [formData , setFormData]= useState({});
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange= (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        console.log(data)
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
     
      navigate('/');
  
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
   
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>



      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
       
        <input type='email' placeholder='Email' className='border p-3 rounded-lg '  onChange={handleChange} id='email'/>
        <input type='password' placeholder='Password' className='border p-3 rounded-lg '  onChange={handleChange} id='password'/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-50'>
          {loading ? 'Loading..... ' : 'SIGN IN'} </button>

          <Oauth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account ?</p>
        <Link to="/sign-up">
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5 '>{error}</p>}




    </div>
  )
}

