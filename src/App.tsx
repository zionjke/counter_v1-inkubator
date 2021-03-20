import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from "./components/Settings/Settings";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [value, setValue] = useState<number>(startValue)
    const [maxValue, setMaxValue] = useState<number>(0)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(startValue)
    }

    const settingsValue = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setMaxValue(maxValue)
        setValue(startValue)
    }


    return (
        <div className="App">
            <Settings settingsValue={settingsValue}
                      startValue={startValue}
                      maxValue={maxValue}
                      value={value}/>
            <Counter value={value}
                     incrementHandler={incrementHandler}
                     resetHandler={resetHandler}
                     startValue={startValue}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;
