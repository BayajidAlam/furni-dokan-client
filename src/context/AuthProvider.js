import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const  [user, setUser]  = useState(null)

  // create a user 
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // sign in user 
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  // sign out a user 
  const signOutUser = () => {
    return signOut(auth);
  }

  // signInWithGoogle 
  const signInWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
  }

  // update user
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser,userInfo)
  } 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
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
    updateUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;