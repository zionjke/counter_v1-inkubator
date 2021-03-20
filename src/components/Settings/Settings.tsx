import * as React from 'react';
import styles from './Settings.module.css'
import {Button} from "../Button/Button";
import {ChangeEvent, useState} from 'react';

type Props = {
    settingsValue: (maxValue: number, startValue: number) => void
    startValue: number
    value: number
    maxValue: number
};
export const Settings: React.FC<Props> = ({settingsValue, startValue, value, maxValue}) => {

    const [startvalue, setStartvalue] = useState<number>(0)
    const [maxvalue, setMaxvalue] = useState<number>(5)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxvalue(Number(e.currentTarget.value))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartvalue(Number(e.currentTarget.value))
    }

    const onClickSettingsValue = () => {
        settingsValue(startvalue, maxvalue)
    }

    let disabledForButton = startValue === startvalue && maxvalue === maxValue

    return (
        <div className={styles.panel}>
            <div className={styles.display}>
                <div className={styles.settingsValue}>
                    <span>
                        max value:
                    </span>
                    <input type="number" value={maxvalue} onChange={onChangeMaxValue}/>
                </div>
                <div className={styles.settingsValue}>
                    <span>
                        start value:
                    </span>
                    <input type="number" value={startvalue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button disabled={disabledForButton} onClick={onClickSettingsValue}>
                    Set
                </Button>
            </div>
        </div>
    );
};
