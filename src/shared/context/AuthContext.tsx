import React, { createContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import { ChildrenProps } from '../interfaces/childrenProps';
import { GoogleAuthResponse } from '../interfaces/Responses/GoogleAuth';
import { GoogleUserInfoResponse } from '../interfaces/Responses/GoogleUserInfo';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

export type UserType = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

type PropsAuthContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
  signInWithGoogle: () => Promise<void>;
};

const DEFAULT_VALUE = {
  user: { id: '', name: '', email: '', photo: '' },
  setUser: () => {},
};

const AuthContext = createContext({} as PropsAuthContext);

const AuthContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType>(DEFAULT_VALUE.user);

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const authResponse = (await AuthSession.startAsync({
        authUrl,
      })) as GoogleAuthResponse;

      if (authResponse.type === 'success') {
        const userResponse = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authResponse.params.access_token}`
        );

        const userInfo =
          (await userResponse.json()) as GoogleUserInfoResponse;

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.name,
          photo: userInfo.picture,
        });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
