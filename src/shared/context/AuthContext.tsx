import React, { createContext, useState } from 'react';
import { ChildrenProps } from '../interfaces/childrenProps';

export type AuthType = {
  user: string;
  name: string;
  email: string;
  photo?: string;
};

type PropsAuthContext = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

const DEFAULT_VALUE = {
  auth: { user: '', name: '', email: '', photo: '' },
  setAuth: () => {},
};

const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE);

const AuthContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthType>(DEFAULT_VALUE.auth);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
