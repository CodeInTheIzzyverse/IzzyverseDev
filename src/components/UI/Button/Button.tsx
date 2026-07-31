import type { ButtonHTMLAttributes, ReactNode } from "react";
import './Button.scss';

type variant = 'primary' | 'secondary' | 'tertiary' | 'filter';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: variant;
}

const Button = ({ children, variant = 'primary', className = "", ...props }: ButtonProps) => {
    return (
        <button className={`btn btn--${variant} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;