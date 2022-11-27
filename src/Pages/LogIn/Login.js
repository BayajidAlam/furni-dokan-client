import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import useToken from "../../hook/useToken";

const Login = () => {
  const { register,formState: {errors}, handleSubmit } = useForm();
  const { signInUser,signInWithGoogle } = useContext(AuthContext)
  const [ logInError, setLogInError ] = useState('')
  const [ loginUserEmail, setLogInUserEmail ] = useState('')
  const [token] = useToken(loginUserEmail)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathName || '/';


  if(token){
    navigate(from,{replace: true})
  }


  const handleLogin = data => {
    // sign in existing user 
    setLogInError('')
    signInUser(data.email,data.password)
    .then(result=>{
      toast.success('User log in successfully!')
      setLogInUserEmail(data.email)
    })
    .catch(err=>{
      setLogInError(err.message)
    })
  }

  const handleGoogleSignIn = () => {
    setLogInError('')
    signInWithGoogle()
    .then(result=>{
      toast.success('User log in successfully!')
      
    })
    .catch(err=>{
      setLogInError(err.message)
    })
  }

  return (
    <div className="bg-[#DBEBFA] flex flex-col justify-center items-center pt-6">
      <h2 className="text-3xl mt-20">Login</h2>
      <form
        className="pb-96 flex flex-col  lg:w-1/4 w-3/4"
        onSubmit={handleSubmit(handleLogin)}
      >
        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input
          className="p-3 rounded-lg mb-2 "
          {...register("email",{
            required: 'Email is required'
          })}
          placeholder="Enter you email"
        />
        {errors.email && <p className="text-error">{errors.email?.message}</p>}
        <label className="label">
          <span className="label-text">Password</span>
        </label>

        <input
          type='password'
          className="p-3 rounded-lg mb-1"
          {...register("password",{
            required: 'Password is required',
            minLength: { value: 6,message:'password must be 6 character'},
            max: 32
          })}
          placeholder="Enter you password"
        />
         {errors.password && <p className="text-error">{errors.password?.message}</p>}
        <span className="label-text-alt mb-4">Forget password?</span>

        <input className="hover:bg-[#000000] text-[#FAFAFA] bg-[#49C0B6] rounded-lg mb-1 p-3" type="submit" />

          <div>
            {logInError && <p className="text-error">{logInError}</p>}
          </div>
        <p className="text-center">Don't have a account?<Link to='/signup' className="text-[#1400F5]">Create new</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline">Continue with Google</button>
      </form>
      <Toaster/>
    </div>
  );
};

export default Login;
