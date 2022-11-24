import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

  const { register,handleSubmit, formState: {errors} } = useForm()
  const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext)
  const [ logInError, setLogInError ] = useState('')

  const signUpHandler = data => {
    // sign in new user 
    setLogInError('')
    createUser(data.email,data.password)
    .then(result=>{
      console.log(result)
      toast.success('User created successfully!')
      const userInfo = {
        displayName: data.name
      }
      // update user 
      updateUser(userInfo)
      .then(()=>{
        toast.success('Profile Updated!')
      })
      .catch(err=>{
        setLogInError(err.message)
      })
    })
    .catch(err=>{
      logInError(err.message)
    })
  }

  const handleGoogleSignUp = () => {
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
      <h2 className="text-3xl mt-20">SignUp</h2>
      <form
        className="pb-96 flex flex-col  lg:w-1/4 w-3/4"
        onSubmit={handleSubmit(signUpHandler)}
      >
        <label className="label">
          <span className="label-text text-lg">Name</span>
        </label>
        <input
          type='text'
          className="p-3 rounded-lg mb-2 "
          {...register('name',{
            required: true
          })}
          placeholder="Enter you name"
        />

        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input
          type='email'
          className="p-3 rounded-lg mb-2 "
          {...register('email',{
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
          className="p-3 rounded-lg mb-6"
          {...register('password',{
            required: 'Password is required',
            minLength: { value: 6, message: 'password must be 6 character long'},
            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8}/,message:'password must have special number and uppdercase and number'}
          })}
          placeholder="Enter you password"
        />

       {errors.password && <p className="text-error">{errors.password?.message}</p>}

        <input className="hover:bg-[#000000] text-[#FAFAFA] bg-[#49C0B6]  rounded-lg mb-1 p-3" type="submit" />

        <div>
            {logInError && <p className="text-error">{logInError}</p>}
        </div>

        <p className="text-center">Already have a account?<Link to='/login' className="text-[#1400F5]">Signup</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignUp} className="btn btn-outline">Continue with Google</button>
      </form>
      <Toaster/>
    </div>
  );
};

export default SignUp;