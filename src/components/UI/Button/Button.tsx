import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import './Button.scss';

type variant = 'primary' | 'secondary' | 'tertiary' | 'filter';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    variant?: variant;
    className?: string;
    href?: string;
    to?: string;
};

const Button = ({ children, variant = 'primary', className = "", href, to, ...props }: ButtonProps) => {
    const classes = `btn btn--${variant} ${className}`.trim();

    if (href) {
        const anchorProps = props as Record<string, unknown>;
        return (
            <a className={classes} href={href} {...anchorProps}>
                {children}
            </a>
        );
    }

    if (to) {
        const linkProps = props as Record<string, unknown>;
        return (
            <Link className={classes} to={to} {...linkProps}>
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