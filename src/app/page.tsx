'use client';

import { usePathname } from 'next/navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/Main';
import NavBar from './components/NavBar';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  // return isLoading && isHome ? (
  return false ? (
    <SplashScreen finishLoading={() => setIsLoading(false)} />
  ) : (
    <div>
      <Header />

      <MainSection />

      <Footer />
    </div>
  );
}
