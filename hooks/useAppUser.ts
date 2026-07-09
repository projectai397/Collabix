'use client';

import { useUser } from '@clerk/nextjs';

import { AppUser } from '@/lib/auth-bypass';
import { useAuthBypass } from '@/providers/AuthBypassProvider';

export const useAppUser = () => {
  const { isBypassed, mockUser } = useAuthBypass();
  const { isLoaded, user, isSignedIn } = useUser();

  if (isBypassed) {
    return {
      isLoaded: true,
      isSignedIn: true,
      user: mockUser as AppUser,
    };
  }

  if (!user) {
    return { isLoaded, isSignedIn: isSignedIn ?? false, user: null };
  }

  return {
    isLoaded,
    isSignedIn: isSignedIn ?? false,
    user: {
      id: user.id,
      username: user.username,
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
    } satisfies AppUser,
  };
};
