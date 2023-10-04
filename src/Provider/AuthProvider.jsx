import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PrivetRoute from "../components/PrivetRoute";

const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
      signInWithPopup(auth, googleProvider);
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

// observe auth state change

    useEffect( () =>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('Observing current value inside useEffect of AuthProvider', currentUser)
        setUser(currentUser);
        setLoading(false);
        
      })
      return () =>{
        unSubscribe()
      }

    }, [])

    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser,
        signInWithGoogle,
        logOut
     }

    return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>







    );
};

export default AuthProvider;

PrivetRoute.PropTypes = {
 children: PropTypes.node
}





/****
 * 
 * 1. Create Context (export)
 * 2. Set Provider with value
 * 4. Use Context
 */