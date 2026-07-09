import { ReactNode } from 'react';

import { isAuthBypassed } from '@/lib/auth-bypass';
import { AuthBypassProvider } from '@/providers/AuthBypassProvider';
import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const bypassAuth = isAuthBypassed();

  return (
    <main>
      <AuthBypassProvider bypassAuth={bypassAuth}>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </AuthBypassProvider>
    </main>
  );
};

export default RootLayout;
