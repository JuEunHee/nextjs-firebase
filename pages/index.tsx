import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { onAuthStateChanged, User } from 'firebase/auth';
import { authService } from '@/lib/firebase';
import Login from '@/components/auth/Login';
import Home from '@/components/auth/Home';

export type LoggedInUser = User | null;

const IndexPage: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<LoggedInUser>(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      setIsLoggedIn(!!user);
      setUserData(user ?? null);
    });
  }, []);

  return isLoggedIn && userData ? <Home userData={userData} /> : <Login />;
};

export default IndexPage;
