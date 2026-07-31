import type { HTMLAttributes, ReactNode } from "react";
import './Badge.scss';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
}

const Badge = ({ children, ...props  }: BadgeProps) => {
    return (
        <span className="badge" {...props}>
            {children}
        </span>
    )
}

export default Badge;