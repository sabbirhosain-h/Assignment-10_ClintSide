import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Authinit';

const AuthPovider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const googleProvider = new GoogleAuthProvider();

const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const SignOut = () => {
    return signOut(auth);
};

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    })
    return () => unSubscribe();
}, []);




const authInfo = {
    SignUp,
    SignIn,
    SignOut,
    signInWithGoogle,
    user,
    setUser,
    loading,
};
return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
);
};

export default AuthPovider;