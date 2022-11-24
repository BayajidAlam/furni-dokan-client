import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { set } from 'react-hook-form';

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const  [user, setUser]  = useState(null)
  const [ loading, setLoading ] = useState(true)

  // create a user 
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in user 
  const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // sign out a user 
  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  // signInWithGoogle 
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  // update user
  const updateUser = (userInfo) => {
    setLoading(true)
    return updateProfile(auth.currentUser,userInfo)
  } 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    });

    return () => {
      unsubscribe()
    }
  },[])

  const authInfo={
    user,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUser,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;