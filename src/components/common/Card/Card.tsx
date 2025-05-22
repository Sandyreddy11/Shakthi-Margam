import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'interactive';
  className?: string; // Allow for additional custom classNames
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  footer,
  variant = 'default',
  className = '',
}) => {
  const classNames = [
    styles.card,
    styles[variant], // e.g., styles.default or styles.interactive
    className,       // For any custom classes passed in
  ].filter(Boolean).join(' ').trim();

  return (
    <div className={classNames}>
      {title && (
        <div className={styles.cardHeader}>
          {title}
        </div>
      )}
      <div className={styles.cardBody}>
        {children}
      </div>
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
