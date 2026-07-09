'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

import { useAuthBypass } from '@/providers/AuthBypassProvider';

import MobileNav from './MobileNav';

const Navbar = () => {
  const { isBypassed, mockUser } = useAuthBypass();

  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          YOOM
        </p>
      </Link>
      <div className="flex-between gap-5">
        {isBypassed ? (
          <div className="flex items-center gap-2">
            <Image
              src={mockUser.imageUrl}
              width={32}
              height={32}
              alt={mockUser.username ?? 'Dev user'}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-white max-sm:hidden">
              {mockUser.username}
            </span>
          </div>
        ) : (
          <>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-white hover:text-blue-1">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-blue-1 px-4 py-2 text-sm font-medium text-white hover:bg-blue-2">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </>
        )}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
