import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider(); 
    
    const signUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
            
    }
    const logOut = () => {
        signOut(auth)   
            .then(() => {
            setUser({})
        })
    }
    
// observe wheather user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {   
    setUser(user)
  }
    });
    }, [])
    
    return {
        user,
        signUsingGoogle,
        signOut,
         logOut
    }
}

export default useFirebase;