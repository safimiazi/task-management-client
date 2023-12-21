import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
const [user, setUser] = useState()

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInWithPassEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
}

    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        signInWithPassEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;