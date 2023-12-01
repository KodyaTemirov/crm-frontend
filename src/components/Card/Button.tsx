import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import Arrow from './arrow.svg';

export const Button = ({
  children,
  size = 'medium',
  appearance,
  arrow = 'none',
  className,
  ...other
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, className, styles[appearance], styles[size])} {...other}>
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
