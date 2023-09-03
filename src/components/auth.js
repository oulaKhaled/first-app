import React, { useState,useEffect} from "react";
import { API } from "../api-service";
import App from "../App";

import { useCookies } from "react-cookie";

function Auth(){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [token,setToken]=useCookies(['mr-token']);
  const[isLoginView,setIsLoginView]=useState(true);



  useEffect(()=>{
  console.log(token);
    if(token['mr-token']) window.location.href='/movies';
  
    },[token])

  const LoginClick=()=>{
    API.LoginUser({username,password})
    .then(resp=> setToken('mr-token',resp.token))
    .catch(error=>console.log(error))
  }
  const registerClick=()=>{

API.registerUser({username,password})
.then(()=>LoginClick())    
.catch(error=>console.log(error))

  }






    return(
        <div>
        {isLoginView?  <h1> Login </h1>:<h1> Register </h1>}
            <label htmlFor='title'>username</label><br/>
            <input id="username" type="text" placeholder="title" value={username}
                onChange={evt=>setUsername(evt.target.value)}

            /><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password" placeholder="password" value={password} 
            onChange={evt=>setPassword(evt.target.value)}/>
            {isLoginView? 
            <button onClick={LoginClick}>Login</button> :
            <button onClick={registerClick}>Register</button>
            }




            {isLoginView ? 
              <p onClick={()=>setIsLoginView(false)}> You dont Have an account? Register here?</p>
           : <p onClick={()=>setIsLoginView(true)}> You are already have account ? Login here</p>

            }   
            

            </div>
           );
}

export default Auth;