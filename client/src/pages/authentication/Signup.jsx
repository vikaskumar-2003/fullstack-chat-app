import React, { useState } from "react";
import {Link} from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { HiMiniKey } from "react-icons/hi2";

const Signup = () => {

  const [signupData, setSignUpData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword:""
  })
  
  const handelChange = (e) => {
    let { name, value } = e.target
    
    setSignUpData({ ...signupData, [name]: value })
    console.log(signupData);
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[40rem]  flex flex-col bg-base-200 rounded-lg p-10 ">
        <h2 className="text-2xl text-center pb-2 mb-4">Signup</h2>

           
                <label className="input validator mb-4 ">
          <FaUser />
          <input
            type="text"
            name="fullname"
            value={signupData.fullname}
            onChange={handelChange}
            required
            placeholder="Full Name"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
        </label>
      

        {/* //user */}

                 <label className="input validator mb-4 ">
          <FaUser />
          <input
            type="text"
            name="username"
            value={signupData.username}
            onChange={handelChange}
            required
            placeholder=" Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
        </label>
       


        {/* password */}

        <label className="input validator mb-4 ">
          <HiMiniKey />
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handelChange}
            required
            placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        {/* <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p> */}

        {/* //confirm password */}

         <label className="input validator m-0 ">
          <HiMiniKey />
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handelChange}
            required
            placeholder=" Confirm Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        {/* <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p> */}

        <button className="btn btn-primary mt-10">Primary</button>
        <p className="p-3" >Already have an account? <Link to="/signup" >Login</Link> </p>
      </div>
     
    </div>
  );
};

export default Signup