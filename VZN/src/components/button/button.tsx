import React, { FC } from "react";
import styles from './button.module.css';

interface IButton {
    id?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    color?: 'Blue' |'LightBlue' | 'TransparentWithBorder' | 'Transparent';
    shape?: 'Round' | 'Square';
    className?: string;
    children?: React.ReactNode;
    size?: 'Regular' | 'Small' | 'Full';
    [key: string]: any;
}

const Button: FC<IButton> = ({
    id,
    type = "button",
    onClick,
    disabled,
    color = 'Blue',
    className,
    children,
    size='Regular',
    shape = 'Round',
}) => {
    const baseClass = styles.button; 
    const colorClass =  styles[`button${color}`];
    const sizeClass =  styles[`button${size}Size`];
    const shapeClass =  styles[`button${shape}Shape`];

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClass} ${colorClass} ${sizeClass} ${shapeClass} ${className || ''}`.trim()}
        >
            {children}
        </button>
    );
};

export default Button;