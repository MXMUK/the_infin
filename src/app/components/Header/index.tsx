import React, { FC, useRef } from 'react';

import styles from './Header.module.scss';

import Button from '../shared/Button';
import ParallaxContainer from '../shared/ParallaxContainer';
import Image from 'next/image';

import mobileApp from '@/../public/images/mobile-app.png';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__mobileExample}>
        <div className={styles.header__mobileExample__text}>
          Web + <br /> Mobile app
        </div>

        <ParallaxContainer multiplier={0.5} className={styles.header__mobileExample__image}>
          <Image src={mobileApp} alt="mobile app" style={{scale: 1.3}} />
        </ParallaxContainer>

        {/* <div className={styles.header__mobileExample__image}></div> */}
      </div>

      <div className={styles.header__mainBlock}>
        <div className={styles.header__mainBlock__text}>
          A market-based assessment of your contribution.
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
    </header>
  );
};

export default Header;
