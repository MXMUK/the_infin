'use client';

import { useScroll, motion, useTransform } from 'framer-motion';
import React, { FC, useRef } from 'react';

import styles from './ParallaxContainer.module.scss';

interface Props {
  className?: string;
  multiplier?: number;
  isScale?: boolean;
}

const ParallaxContainer: FC<React.PropsWithChildren<Props>> = ({
  children,
  className = '',
  isScale = false,
  multiplier = 2,
  ...otherProps
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [-75 * multiplier, 75 * multiplier]
  );
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      ref={ref}
      {...otherProps}
      className={`${styles.parallaxContainer__container} ${className}`}
      // className={styles.parallaxContainer__container}
    >
      <motion.div
        style={{ y: bgParallaxY, scale: isScale ? bgScale : 1 }}
        className={styles.parallaxContainer__container__inner}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;
