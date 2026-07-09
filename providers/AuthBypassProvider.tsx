'use client';

import { createContext, ReactNode, useContext } from 'react';

import { AppUser, MOCK_USER } from '@/lib/auth-bypass';

type AuthBypassContextValue = {
  isBypassed: boolean;
  mockUser: AppUser;
};

const AuthBypassContext = createContext<AuthBypassContextValue>({
  isBypassed: false,
  mockUser: MOCK_USER,
});

export const AuthBypassProvider = ({
  children,
  bypassAuth,
}: {
  children: ReactNode;
  bypassAuth: boolean;
}) => (
  <AuthBypassContext.Provider
    value={{ isBypassed: bypassAuth, mockUser: MOCK_USER }}
  >
    {children}
  </AuthBypassContext.Provider>
);

export const useAuthBypass = () => useContext(AuthBypassContext);
