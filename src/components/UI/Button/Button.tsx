import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import './Button.scss';

type variant = 'primary' | 'secondary' | 'tertiary' | 'filter';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'href'>, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'to'> {
    children: ReactNode;
    variant?: variant;
    className?: string;
    href?: string;
    to?: string;
}

const Button = ({ children, variant = 'primary', className = "", href, to, ...props }: ButtonProps) => {
    const classes = `btn btn--${variant} ${className}`.trim();

    if (href) {
        return (
            <a className={classes} href={href} {...props}>
                {children}
            </a>
        );
    }

    if (to) {
        return (
            <Link className={classes} to={to} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;