import React, {useEffect} from 'react';
import {Button} from "../Button/Button";
import styles from './Counter.module.css'

type Props = {
    value: number
    maxValue: number
    startValue: number
    incrementHandler: () => void
    resetHandler: () => void
};
export const Counter: React.FC<Props> = ({value, maxValue, startValue, incrementHandler, resetHandler}) => {



    return (
        <div className={styles.panel}>
            <div className={styles.display}>
                <span className={`${value === maxValue && 'finishValue'}`}>{value}</span>
            </div>
            <div className={styles.buttons}>
                <Button onClick={incrementHandler} disabled={value === maxValue}>
                    Inc
                </Button>
                <Button onClick={resetHandler} disabled={value === startValue}>
                    Reset
                </Button>
            </div>
        </div>

    );
};
