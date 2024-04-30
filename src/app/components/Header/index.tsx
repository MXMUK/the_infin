import React, { FC, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Header.module.scss';

import Button from '../shared/Button';
import ParallaxContainer from '../shared/ParallaxContainer';
import Image from 'next/image';

import mobileApp from '@/../public/images/mobile-app.png';
import useMouse from '@react-hook/mouse-position';
import NavBar from '../NavBar';

const Header: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
    fps: 15,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    hidden: {
      opacity: 0,
      x: mouseXPosition - 151,
      y: mouseYPosition - 120,
    },
    visible: {
      opacity: 1,
      x: mouseXPosition - 151,
      y: mouseYPosition - 120,
    },
  };

  const cursorTransition = {
    opacity: {
      // delay: 1,
    },
  };

  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleMouseLeave = () => {
      setShowCursor(false);
    };
    const handleMouseEnter = () => {
      setShowCursor(true);
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <header className={styles.header} ref={ref}>
      <NavBar />

      <div className={styles.header__mobileExample}>
        <div className={styles.header__mobileExample__text}>
          <div>Web + <br /> Mobile app</div>
        </div>

        <ParallaxContainer
          multiplier={0.5}
          className={styles.header__mobileExample__image}
        >
          <Image src={mobileApp} alt="mobile app" style={{ scale: 1.3 }} />
        </ParallaxContainer>
      </div>

      <div className={styles.header__mainBlock}>
        <div className={styles.header__mainBlock__text}>
          <div>A market-based assessment of your contribution.</div>
        </div>

        <div className={styles.header__mainBlock__titleContainer}>
          <h1 className={styles.header__mainBlock__title}>
            To know your true value, Help others understand theirs.
          </h1>

          <Button height={90} width={223} variant="dark">
            Schedule a demo
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showCursor && (
          <motion.div
            variants={variants}
            animate="visible"
            initial="hidden"
            // animate="visible"
            exit="hidden"
            transition={cursorTransition}
            className={styles.header__cursor}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
