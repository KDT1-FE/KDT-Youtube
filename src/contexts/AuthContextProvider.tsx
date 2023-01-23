import { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange, login, logout } from 'src/api/firebase/firebase';

const AuthContext = createContext<any>(false);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    // 로그인 유지
    onUserStateChange(setUser);
  }, []);

  return <AuthContext.Provider value={{ user, login: login, logout: logout }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
