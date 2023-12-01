import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost' | 'primaryGhost' | 'dashed' | 'success';
  arrow?: 'right' | 'down' | 'none';
  size?: 'large' | 'medium' | 'small';
}
