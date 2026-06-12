import  { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { HiMiniKey } from "react-icons/hi2";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux"
import { loginUserThunk } from "../../store/slice/user/user.thunk";

const Login = () => {

  const dispatch=useDispatch()
  const [loginData, setLoginData] = useState({
    username: "",
    password:""
   })

  const navigate=useNavigate()

   

  const handleChange = (e) => {
    let{name,value}=e.target
    setLoginData({ ...loginData, [name]: value })
    console.log(loginData);
    
  }

  const handleLogin = async() => {
   
    const response = await dispatch(loginUserThunk(loginData))
    console.log("form response", response);

    if (response.payload.success === true) {
       toast.success("success")
      navigate("/")
    }
    
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[40rem]  flex flex-col bg-base-200 rounded-lg p-10 ">
        <h2 className="text-2xl text-center pb-2">Login</h2>
        <label className="input validator  mb-4">
          <FaUser />
          <input
            type="text"
            value={loginData.username}
            onChange={handleChange}
            required
            name="username"
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        {/* <p className="validator-hint">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </p> */}

        {/* password */}

        <label className="input validator  mb-4 ">
          <HiMiniKey />
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
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

        <button className="btn btn-primary " onClick={handleLogin} >Login</button>
        <p>Don't have an account? <Link to="/signup" >Sign up</Link> </p>
      </div>
     
    </div>
  );
};

export default Login;
