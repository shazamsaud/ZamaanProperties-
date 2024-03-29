import React from "react";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import {app} from '../firebase.js'
import {useDispatch, } from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice.js'
import { useNavigate } from "react-router-dom";
export default function Oauth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleGoogleClick = async () =>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result  = await signInWithPopup(auth,provider)
            const res = await fetch('https://zamaan-back.vercel.app//api/auth/google',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo: result.user.photoURL
                }),
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            console.log("could not sign-in with google");
        }
    }




  return (
    <button
    onClick={handleGoogleClick}
      type="button"
      className="  text-white text-center bg-red-700 p-3 rounded-lg uppercase hover:opacity-90"
    >
      Countinue with Google{" "}
    </button>
  );
}
