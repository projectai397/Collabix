export const isAuthBypassed = () => process.env.BYPASS_AUTH === 'true';

export const MOCK_USER = {
  id: 'dev-bypass-user',
  username: 'dev-user',
  imageUrl: '/icons/logo.svg',
  firstName: 'Dev',
  lastName: 'User',
} as const;

export type AppUser = {
  id: string;
  username: string | null;
  imageUrl: string;
  firstName: string | null;
  lastName: string | null;
};
