import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const signUsingGoogle = () => {
    setIsLoding(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoding(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoding(true);
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoding(false);
      });
  };

  const getEmail = email => {
    setEmail(email);
  };
  const getPassword = password => {
    setPassword(password);
  };

  const registerWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return {
    users,
    isLoding,
    signUsingGoogle,
    error,
    setError,
    logOut,
    getEmail,
    getPassword,
    registerWithEmail,
    signInWithEmail,
    setUsers,
    setIsLoding,
  };
};

export default useFirebase;
