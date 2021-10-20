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
    setIsLoding(false);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUsers(result.user);
      })
      .finally(() => {
        setIsLoding(false);
      });
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
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUsers(result.users);
        window.location.reload();
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const signInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUsers(result.users);
        window.location.reload();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return {
    users,
    isLoding,
    signUsingGoogle,
    error,
    logOut,
    getEmail,
    getPassword,
    registerWithEmail,
    signInWithEmail,
  };
};

export default useFirebase;
