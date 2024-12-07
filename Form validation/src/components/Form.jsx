import React, { useState } from "react";
import { validateEmail ,validatePassword } from "./ValidateEmailPassword";

const Form = () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [error,setError]= useState('');

  const handleSubmit =(e)=>{
    e.preventDefault()

    const newErrors={};

    if (!validateEmail(email)) {
      
      newErrors.email = "invalid email format."
    }
    if (!validatePassword(password)) {
      
      newErrors.password = "Password must be at least 6 characters."
    }
if (Object.keys(newErrors).length > 0) {
  setError(newErrors)
}else{
  setError({})
  alert("Login successful")
}

  }

  return (
    <div className="bg-gradient-to-tl to-blue-700 via-cyan-300 from-white w-11/12 max-w-md h-[550px] place-self-center rounded-xl p-7">
      {/* --------input form--------- */}

      <form onSubmit={handleSubmit} className=" flex flex-col space-y-4  ">
        <label htmlFor="email">Enter Email</label>
        <input
          className={`outline-none  rounded-lg h-9 pl-5 ${error.email ? "border-red-400":""}`}
          type="email"
          placeholder="enter email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        { error.email &&(<p className="text-red-500 text-sm">{error.email}</p>)}
        <label htmlFor="password">Enter Passwoed</label>
        <input
          className={`outline-none border-0 rounded-lg h-9 pl-5 ${error.password ? "border-red-400":""}` }
          type="password"
          placeholder="enter password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
         { error.password &&(<p className="text-red-500 text-sm">{error.password}</p>)}
        <div className="place-self-center pt-5 ">
        <button className="px-1 py-3 w-32 rounded-2xl place-self-center text-white  bg-blue-800" type="submit"> login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
