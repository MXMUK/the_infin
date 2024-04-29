'use client';

import { usePathname } from 'next/navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/Main';
import NavBar from './components/NavBar';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event: MouseEvent): void => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return isLoading && isHome ? (
  // return false ? (
    <SplashScreen finishLoading={() => setIsLoading(false)} />
  ) : (
    <div>
      <NavBar />

      <Header />

      <MainSection />

      <motion.div
        className="cursor"
        style={{ x: mousePosition.x, y: mousePosition.y }}
      />

      <Footer />
    </div>
  );
}
