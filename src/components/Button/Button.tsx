import * as React from 'react';
import styles from './Button.module.css'

type Props = {
    disabled?:boolean
    onClick: () => void
    children:any
};
export const Button: React.FC<Props> = ({disabled,onClick,children}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
