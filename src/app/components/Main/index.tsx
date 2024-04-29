'use client';

import React, { FC, useRef } from 'react';

import styles from './MainSection.module.scss';

import playerImage from '@/../public/images/main-player.jpg';
import playIcon from '@/../public/images/play-icon.svg';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { projects } from './data';
import Card from '../shared/Card';
import ParallaxContainer from '../shared/ParallaxContainer';
import Button from '../shared/Button';

const MainSection: FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <main className={styles.main}>
      {/* <div ref={ref} className={styles.main__imageContainer}>
        <motion.div
          style={{ y: bgParallaxY }}
          className={styles.main__imageContainer__inner}
        >
          <Image fill src={playerImage} alt="player image" />
        </motion.div>
      </div> */}

      <div className={styles.main__player}>
        <ParallaxContainer isScale className={styles.main__player__image}>
          <Image fill src={playerImage} alt="player image" />
        </ParallaxContainer>

        <Button
          fontSize={14}
          width={185}
          height={90}
          className={styles.main__player__button}
        >
          play
          <div className={styles.main__player__button__playIcon}>
            <Image src={playIcon} alt="play icon" />
          </div>
        </Button>
      </div>

      {/* {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })} */}
    </main>
  );
};

export default MainSection;
