import React, { FC } from 'react';

import styles from './Footer.module.scss';
import Image from 'next/image';

import logo from '@/../public/images/logo.svg';
import companyLogo from '@/../public/images/companyLogo.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__mainSection}>
        <div className={styles.footer__mainSection__text}>
          Employers have to decide on bonuses and promotions based on limited
          information and often with resentment from the employees. It’s
          frustrating.
        </div>

        <div className={styles.footer__mainSection__list}>
          <span className={styles.footer__mainSection__list__name}>Pages</span>

          <ul>
            <li>Home</li>
            <li>For Businesses</li>
            <li>For Individuals</li>
            <li>Blog</li>
            <li>Marketing Efforts</li>
          </ul>
        </div>

        <div className={styles.footer__mainSection__list}>
          <span className={styles.footer__mainSection__list__name}>
            For Business
          </span>

          <ul>
            <li>label link 1</li>
            <li>label link 2</li>
            <li>label link 3</li>
          </ul>
        </div>

        <div className={styles.footer__mainSection__list}>
          <span className={styles.footer__mainSection__list__name}>
            For Individuals
          </span>

          <ul>
            <li>label link 1</li>
            <li>label link 2</li>
            <li>label link 3</li>
          </ul>
        </div>

        <div className={styles.footer__mainSection__list}>
          <span className={styles.footer__mainSection__list__name}>
            Contact
          </span>

          <ul>
            <li>421-273-0427</li>
            <li>info@theinfin.com</li>
          </ul>
        </div>

        <div className={styles.footer__mainSection__list}>
          <span className={styles.footer__mainSection__list__name}>
            Social Media
          </span>

          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__logo}>
        <Image style={{ width: '100%' }} src={logo} alt="logo" />

        <div className={styles.footer__logo__copyrightNotices}>
          <Image src={companyLogo} alt="company logo" />

          <div>
            © 2024 • Curated by
            <span className={styles.footer__logo__copyrightNotices__name}>
              ThinkSeb
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
