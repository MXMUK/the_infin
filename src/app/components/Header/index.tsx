import React, { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
    default: {
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'tween',
      },
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

    if (ref.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
    }

    if (ref.current) {
      ref.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [ref]);

  return (
    <header className={styles.header} ref={ref}>
      <NavBar />

      <div className={styles.header__mobileExample}>
        <div className={styles.header__mobileExample__text}>
          Web + <br /> Mobile app
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

      <motion.div
        style={{ display: showCursor ? 'block' : 'none' }}
        variants={variants}
        className={styles.header__cursor}
        animate="default"
      />
    </header>
  );
};

export default Header;
