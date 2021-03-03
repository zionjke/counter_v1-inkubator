import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';

function App() {
    const [startValue, setStartValue] = useState<number>(4)
    const [value, setValue] = useState<number>(startValue)
    const [finishValue, setFinishValue] = useState<number>(9)
    return (
        <div className="App">
            <Counter value={value} finishValue={finishValue}/>
            <div className='buttons'>
                <button disabled={value === finishValue} onClick={() => setValue(value + 1)} className='button'>Inc
                </button>
                <button disabled={value === startValue} onClick={() => setValue(startValue)} className='button'>Reset
                </button>
            </div>
        </div>
    );
}

export default App;
