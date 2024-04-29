'use client'
import Image from 'next/image';
import styles from './Card.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { FC, useRef } from 'react';

type Props = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
}

const Card: FC<Props> = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.cardContainer__card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={src}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card
