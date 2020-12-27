import React, {useState, useEffect, useContext, createContext} from 'react';
import nookies from 'nookies';
import firebaseClient from '../utils/firebaseClient';
import LoginDialog from '../components/elements/FirebaseLogin/LoginDialog';

const AuthContext = createContext<{
  user: firebaseClient.User | null;
  open: boolean;
  signIn?: () => void;
  handleClose?: () => void;
}>({
  user: null,
  open: false,
});

export function AuthProvider({children}: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const signIn = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      (window as any).nookies = nookies;
    }
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', {});
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{user, open, signIn, handleClose}}>
      <LoginDialog open={open} handleClose={handleClose} user={user} />
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
