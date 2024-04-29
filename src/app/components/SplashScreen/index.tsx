'use client';

import React, { FC, useEffect, useState } from 'react';

import styles from './SplashScreen.module.scss';
import Image from 'next/image';

import logoPartN from '@/../public/images/logo-part-n.svg';
import logoPartThe from '@/../public/images/logo-part-the.svg';
import logoPartI from '@/../public/images/logo-part-i.svg';
import logoPartFin from '@/../public/images/logo-part-fin.svg';
import { motion } from 'framer-motion';

type Props = {
  finishLoading: () => void;
};

const SplashScreen: FC<Props> = ({ finishLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className={styles.splashScreen}
    >
      <motion.div
        initial={{ x: 33 }}
        animate={{ x: [33, 66, 66, 0] }}
        transition={{ duration: 2, times: [0, 0.4, 0.6, 0.8, 1] }}
        className={styles.splashScreen__logo}
      >
        <motion.div
          initial={{ opacity: 0, x: 195, scale: 0.75 }}
          animate={{
            opacity: [0, 1, 1, 1],
            scale: [0.75, 1, 1, 1],
            x: [195, 55, 55, 0],
          }}
          transition={{ duration: 2, times: [0, 0.4, 0.6, 1] }}
          className={styles.splashScreen__the}
        >
          <Image priority src={logoPartThe} alt="logo the part" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 3, times: [0, 0.4, 0.6, 1] }}
        >
          <Image
            priority
            className={styles.splashScreen__i}
            src={logoPartI}
            alt="logo i part"
          />
        </motion.div>

        <motion.div>
          <Image priority src={logoPartN} alt="logo n part" />
        </motion.div>

        <motion.div
          className={styles.splashScreen__fin}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 3, times: [0, 0.4, 0.6, 1] }}
        >
          <Image priority src={logoPartFin} alt="logo fin part" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
