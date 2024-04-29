import React, { FC } from 'react';

import styles from './Button.module.scss';
import clsx from 'clsx';

export interface Props {
  height?: number;
  width?: number;
  variant?: string;
  className?: string;
  fontSize?: number;
  onClick?: (() => void) | ((e: any) => void);
}

const Button: FC<React.PropsWithChildren<Props>> = ({
  children,
  variant = 'dark',
  height = '100%',
  width = '100%',
  className = '',
  fontSize = 12,
  onClick,
  ...otherProps
}) => {
  const rootClassName = clsx(styles.button, {
    [styles.button_dark]: variant === 'dark',
    [styles.button_white]: variant === 'white',
    [styles.button_transparent]: variant === 'transparent',
    [className]: true,
  });

  return (
    <button
      className={rootClassName}
      onClick={onClick}
      style={{ height, width, fontSize }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
