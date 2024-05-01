import React, { FC, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Button from '../shared/Button';
import styles from './Nav.module.scss';
import logo from '@/../public/images/logo.svg';

const NavBar: FC = () => {
  const startScrollValue = 0;
  const endScrollValue = 20;

  const initialHeightNavBarValue = 146;
  const finalHeightNavBarValue = 88;

  const initialWidthLogo = 515;
  const finalWidthLogo = 189;

  const initialWidthButton = 223;
  const finalWidthButton = 108;
  const initialHeightButton = 90;

  const speed = 0.05;
  const scrollDistance = (endScrollValue - startScrollValue) / speed;

  const startY = 0;
  const endY = startY + scrollDistance;

  const { scrollY } = useScroll();

  // whole navbar animation
  const scrollNavBar = useTransform(
    scrollY,
    [startY, endY],
    [initialHeightNavBarValue, finalHeightNavBarValue]
  );

  // logo animation
  const scrollLogo = useTransform(
    scrollY,
    [startY, endY],
    [initialWidthLogo, finalWidthLogo]
  );

  // button animation
  const scrollButtonWidth = useTransform(
    scrollY,
    [startY, endY],
    [initialWidthButton, finalWidthButton]
  );
  const scrollButtonHeight = useTransform(
    scrollY,
    [startY, endY],
    [initialHeightButton, initialHeightButton / 2]
  );

  const scrollBgOpacity = useTransform(
    scrollY,
    [startY, endY],
    [0, 1]
  );

  const [isMenuWrapperGap, setIsMenuWrapperGap] = useState(0);
  const [menu1Display, setMenu1Display] = useState('block');
  const [menu2Display, setM2enuDisplay] = useState('none');
  const [menu2FirstItemDisplay, setMenu2FirstItemDisplay] = useState('none');
  const [menu3Display, setM3enuDisplay] = useState('none');
  const [menu3FirstItemDisplay, setMenu3FirstItemDisplay] = useState('none');
  const [menu4Display, setMenu4Display] = useState('none');
  const [menu4FirstItemDisplay, setMenu4FirstItemDisplay] = useState('none');
  const [menu5Display, setMenu5Display] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMenu1Display('none');
        setIsMenuWrapperGap(24);
      } else {
        setMenu1Display('block');
        setIsMenuWrapperGap(0);
      }

      if (window.scrollY > scrollDistance / 5) {
        setM2enuDisplay('none');
      } else if (window.scrollY <= scrollDistance / 5 && window.scrollY > 0) {
        setM2enuDisplay('block');
        setMenu2FirstItemDisplay('block');
      } else if (window.scrollY < scrollDistance / 5) {
        setM2enuDisplay('none');
        setMenu2FirstItemDisplay('none');
      } else {
        setM2enuDisplay('none');
      }

      if (window.scrollY > (scrollDistance / 5) * 3) {
        setM3enuDisplay('none');
      } else if (
        window.scrollY <= (scrollDistance / 5) * 2 &&
        window.scrollY > scrollDistance / 5
      ) {
        setM3enuDisplay('block');
        setMenu3FirstItemDisplay('block');
      } else if (window.scrollY < (scrollDistance / 5) * 2) {
        setM3enuDisplay('none');
        setMenu3FirstItemDisplay('none');
      } else {
        setM3enuDisplay('none');
      }

      if (window.scrollY > (scrollDistance / 5) * 4) {
        setMenu4Display('none');
      } else if (
        window.scrollY <= (scrollDistance / 5) * 3 &&
        window.scrollY > (scrollDistance / 5) * 2
      ) {
        setMenu4Display('block');
        setMenu4FirstItemDisplay('block');
      } else if (window.scrollY < (scrollDistance / 5) * 3) {
        setMenu4FirstItemDisplay('none');
        setMenu4Display('none');
      } else {
        setMenu4Display('none');
      }

      if (
        window.scrollY <= (scrollDistance / 5) * 4 &&
        window.scrollY > (scrollDistance / 5) * 3
      ) {
        setMenu5Display('block');
      } else if (window.scrollY < (scrollDistance / 5) * 4) {
        setMenu5Display('none');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDistance]);

  return (
    <motion.nav style={{ height: scrollNavBar, background: `rgba(193, 193, 193, ${scrollBgOpacity})` }} className={styles.nav}>
      <motion.div
        style={{ width: scrollLogo }}
        className={styles.nav__noShrink}
      >
        <Image priority src={logo} alt="logo" />
      </motion.div>

      <div
        className={styles.nav__menuWrapper}
        style={{ gap: isMenuWrapperGap }}
      >
        <motion.ul className={styles.nav__menuWrapper__menu}>
          <motion.li>Home</motion.li>
          <motion.li style={{ display: menu1Display }}>
            For Businesses
          </motion.li>
          <motion.li style={{ display: menu1Display }}>
            For Individuals
          </motion.li>
          <motion.li style={{ display: menu1Display }}>
            Capitalism 2.0
          </motion.li>
          <motion.li style={{ display: menu1Display }}>
            Marketing Efforts
          </motion.li>
        </motion.ul>

        <motion.ul className={styles.nav__menuWrapper__menu}>
          <motion.li style={{ display: menu2FirstItemDisplay }}>
            For Businesses
          </motion.li>
          <motion.li style={{ display: menu2Display }}>
            For Individuals
          </motion.li>
          <motion.li style={{ display: menu2Display }}>
            Capitalism 2.0
          </motion.li>
          <motion.li style={{ display: menu2Display }}>
            Marketing Efforts
          </motion.li>
        </motion.ul>

        <motion.ul className={styles.nav__menuWrapper__menu}>
          <motion.li style={{ display: menu3FirstItemDisplay }}>
            For Individuals
          </motion.li>
          <motion.li style={{ display: menu3Display }}>
            Capitalism 2.0
          </motion.li>
          <motion.li style={{ display: menu3Display }}>
            Marketing Efforts
          </motion.li>
        </motion.ul>

        <motion.ul className={styles.nav__menuWrapper__menu}>
          <motion.li style={{ display: menu4FirstItemDisplay }}>
            Capitalism 2.0
          </motion.li>
          <motion.li style={{ display: menu4Display }}>
            Marketing Efforts
          </motion.li>
        </motion.ul>

        <motion.ul className={styles.nav__menuWrapper__menu}>
          <motion.li style={{ display: menu5Display }}>
            Marketing Efforts
          </motion.li>
        </motion.ul>
      </div>

      <motion.div
        style={{
          width: scrollButtonWidth,
          height: scrollButtonHeight,
        }}
        className={styles.nav__noShrink}
      >
        <Button variant="transparent">Contact</Button>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
