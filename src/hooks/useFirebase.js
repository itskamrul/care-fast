import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
// import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import initializeAuthentication from '../Components/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoding, setIsLoding] = useState(true);

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

  return {
    users,
    isLoding,
    signUsingGoogle,
    logOut,
  };
};

export default useFirebase;
